export async function onRequestGet({ request, env }) {
    try {

        const { db } = env

        const url = new URL(request.url)
        const params = url.searchParams

        const limit = Number(params.get('limit')) || 10
        const page = Number(params.get('page')) || 1
        const search = params.get('search')
        
        const offset = (page - 1) * limit

        let queryParams = []
        let where = `WHERE 1 = 1`

        if (search) {
            where += ` AND title LIKE ? COLLATE NOCASE`
            queryParams.push(`%${search}%`)
        }

        const { results: movies} = await db
            .prepare(`SELECT * FROM movies ${where} ORDER BY id DESC LIMIT ? OFFSET ?`)
            .bind(...queryParams, limit, offset)
            .all()

        const { results: movieCount } = await db
            .prepare(`SELECT COUNT(*) AS total FROM movies ${where}`)
            .bind(...queryParams)
            .all()

        const totalMovies = movieCount[0].total
        const pages = Math.ceil(totalMovies / limit)

        return Response.json(
            {success: true, message: 'Successfully retrieved movies!', pages, movies}, 
            {status: 200}
        )

    } catch (err) {
        console.log(err)
        return Response.json(
            {success: false, message: 'Internal server error!'}, 
            {status: 500}
        )
    }
}

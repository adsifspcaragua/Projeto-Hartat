export async function onRequestGet({ request, env, params }) {
    try {

        const { db } = env
        const { id } = params

        const data = await db
            .prepare(`
                SELECT
                    m.*,
                    b.name AS banner_name,
                    b.extension AS banner_extension,
                    c.name AS cover_name,
                    c.extension AS cover_extension
                FROM movies m
                    LEFT JOIN images b ON b.uuid = m.banner_uuid
                    LEFT JOIN images c ON c.uuid = m.cover_uuid
                WHERE m.id = ?
            `)
            .bind(id)
            .first()

        if (!data) {
            return Response.json(
                {success: false, message: 'Unable to find data!'}, 
                {status: 404}
            )
        }

        return Response.json(
            {success: true, message: 'Successfully retrieved data!', data},
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

//GET api/images/[uuid]
export async function onRequestGet({ request, params, env }) {
    const { bucket } = env

    const { uuid } = params
    const url = new URL(request.url)
    const previewMode = (url.searchParams.get('preview') !== null) ? '_preview' : ''

    const object = await bucket.get(uuid + previewMode)
    
    if (object == null) {
        return new Response('Unable to retrieve image!', {status: 404})
    }

    const type = object.httpMetadata.contentType

    return new Response(object.body, {
        headers: {
            'Content-Type': type
        }
    })
}

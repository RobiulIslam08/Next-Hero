export async function PATCH(request,{params}){
	const body = await request.json()
	const index = comments.findIndex(c => c.id === parseInt(params.id))
	comments[index] = {
		text: body.text
	}
	return Response.json({
		message: 'update comments',
		comments
	})
}
const comments = [
	{
		id:1,
		text: 'cooments o1'
	},
	{
		id:1,
		text: 'cooments o1'
	},
	{
		id:1,
		text: 'cooments o1'
	},
]
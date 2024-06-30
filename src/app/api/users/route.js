export async function GET(){
	return Response.json({
		comments
	})
}
export async function POST(request){
	const newComment = await request.json()
	comments.push({
		id : comments.length + 1,
		text: newComment.text
	})
	return Response.json({
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
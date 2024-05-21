export default async function searchTerm(request, response){

const { searchTerm } = request.query;

if (!searchTerm) {
  return;
}

const API = process.env.NEXT_PUBLIC_IMAGE_API_KEY;

if(request.method === 'GET') {
    const apiResponse =  await fetch(
      `https://pixabay.com/api/?key=${API}&q=${searchTerm}&image_type=photo`
    )
    const image = await apiResponse.json()
    if(!image){return response.status(404).json({ status: "Not found" });}
    response.status(200).json(image);
  }
}

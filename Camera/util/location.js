const GOOGLE_API_KEY = 'AIzaSyAkUrtcJOQSbRYAXzxT3X8PomGBVkld3hc';

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}


export const getMapPreview2=(lat,lng)=>{
    return `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0538651484617!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d62ca7cca313%3A0x56117ef347e25638!2zNzFhIHZlbiBrw6puaCwgVGjhuqFuaCBYdcOibiwgUXXhuq1uIDEyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1709821637064!5m2!1svi!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
}
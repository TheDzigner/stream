function streamVideo()

{

  const video = document.querySelector('#video')

  const options = {video : true, audio : true};

  

  navigator.mediaDevices.getUserMedia(options)

 .then(stream => video.srcObject = stream)

 .catch(error => alert(error))

}


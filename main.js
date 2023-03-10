function streamVideo()

{

  const video = document.querySelector('#video')

  const options = {video : true, audio : true};

  

  navigator.mediaDevices.getUserMedia(options)

  .then(stream => {

    video.srcObject = stream;

    const downloadButton = document.querySelector('#downloadButton');

    downloadButton.addEventListener('click', () => {

      const blob = new Blob([stream], { type: 'video/webm' });

      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');

      a.href = url;

      a.download = 'streamed_video.webm';

      a.click();

    });

  })

  .catch(error => alert(error))

}


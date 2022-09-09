    var myvid = document.getElementById('myVideo');
    var myvids = [
      "vid/Letter-text-fly.mp4",
      "vid/hello-world.mp4",
      "vid/pc-fan.mp4",
      "vid/space-atom.mp4",
      "vid/globe-network.mp4",
      "vid/source-code.mp4", 
      "vid/Glitch.mp4",
      
    ];
    var activeVideo = 0;
    
    myvid.addEventListener('ended', function(e) {
      // update the active video index
      activeVideo = (++activeVideo) % myvids.length;
    
      // update the video source and play
      myvid.src = myvids[activeVideo];
      myvid.play();
    });


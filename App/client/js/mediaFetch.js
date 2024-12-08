const searchMedia = async (mediaId) => {
    const response = await fetch('http://localhost:3000/search-media', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mediaId: mediaId })
    });
  
    const responseData = await response.json();
    console.log('Results from server:', responseData);
  };
  
  // Example usage
  searchMedia(1);  // Call with mediaId = 1
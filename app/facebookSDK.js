'use client';

import { useEffect } from 'react';

const FacebookSDK = ({ setPhotos }) => {

    
  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        appId: '852863129617272',
        cookie: true,
        xfbml: true,
        version: 'v18.0'
      });
      FB.AppEvents.logPageView();

      // Check login status
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          var userAccessToken = response.authResponse.accessToken;
          // User is logged in and your app is authorized.
          // Retrieve page access token
          getPageAccessToken(userAccessToken);
        } else {
          // Prompt user to login and authorize your app
          FB.login(function(response) {
            if (response.authResponse) {
              var userAccessToken = response.authResponse.accessToken;
              // User is logged in and your app is authorized.
              // Retrieve page access token
              getPageAccessToken(userAccessToken);
            } else {
              console.log('User cancelled login or did not fully authorize.');
            }
          }, {scope: 'manage_pages,pages_show_list'});
        }
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const getPageAccessToken = (userAccessToken) => {
    FB.api('/me/accounts', 'GET', { access_token: userAccessToken }, function(response) {
      var pages = response.data;
      var pageAccessToken;
      for(var i = 0; i < pages.length; i++) {
        if(pages[i].id === '235671779938449') {  
          pageAccessToken = pages[i].access_token;
          break;
        }
      }
      
      if(pageAccessToken) {
       fetchPhotos('235671779938449', pageAccessToken);  
        console.log('Page Access Token:', pageAccessToken);
      } else {
        console.error('Page access token could not be retrieved.');
      }
    });

    const fetchPhotos = (pageId, pageAccessToken) => {
        FB.api(`/${pageId}/photos`, 'GET', { access_token: pageAccessToken }, function(photoResponse) {
          setPhotos(photoResponse.data);  // Storing photos data in state
        });
      };
  };

  return null;
};

export default FacebookSDK;

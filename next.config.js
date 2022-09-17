const withPWA = require('next-pwa');
module.export = withPWA({
  pwa:{
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com','api.lorem.space','vuzoon.com','www.complementosdelcafe.com','www.cronista.com','www.tecnologia-informatica.com','www.multiofertas.hn','www.walmart.com.hn','i.blogs.es','www.amazon.com','www.sony.com.hn', '*.*','cdn.pixabay.com','www.libreriahuequito.com','thumbs.dreamstime.com','wow.zamimg.com','bnetcmsus-a.akamaihd.net', ''],
  },
});
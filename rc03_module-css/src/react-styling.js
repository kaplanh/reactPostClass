//! Styling Components In React
// ➤ Styling React components over the years has improved and become much easier with various techniques and strategies.

// ➤ In this chapter, we’re going to learn how to style React components:

// ● Using Inline Styling

// ● Importing CSS Stylesheets

// ● Importing CSS Modules

// ● Using CSS pre-processor Sass

// ● Using Styled-Components

// ● Using third-party libraries

// *türkce
// !React'te Bileşenleri Şekillendirme
// React bileşenlerini şekillendirmek yıllar içinde gelişti ve çeşitli teknikler ve stratejilerle çok daha kolay hale geldi.

// ➤ Bu bölümde React bileşenlerine nasıl stil verileceğini öğreneceğiz:

// Satır İçi Şekillendirmeyi Kullanma

// CSS Stil Sayfalarını İçe Aktarma

// CSS Modüllerini İçe Aktarma

// CSS ön işlemcisi Sass'ı kullanma

// Styled-Components Kullanımı

// Üçüncü taraf kütüphaneleri kullanma

// ?Inline Styling
// ➤ Satır içi stil özniteliğiyle bir öğeye stil vermek için, değer bir JavaScript nesnesi olmalıdır:
// ➤ Since the inline CSS is written in a JavaScript object, properties with two names, like background - color, must be written with camel case syntax:
// ● Use backgroundColor instead of background-color:
https://codesandbox.io/s/billowing-moon-o7h9hz?from-embed

// *➤ Stil bilgisine sahip bir nesne de oluşturabilir ve stil özelliğinde ona başvurabilirsiniz:
https://codesandbox.io/s/still-grass-f4rv8r?from-embed


// ?CSS Stylesheet-CSS Stil Sayfası
// ➤ CSS Stil Sayfaları, stilin nerede uygulanması gerektiğine bağlı olarak React bileşenlerinize içe aktarılabilen harici CSS stil sayfalarının kullanımını içeren bir stil stratejisidir.
// ➤ Uygulamanızdan App.css import edebilirsiniz. Stiller hemen geçerli olacaktır.
https://codesandbox.io/s/withered-brook-g8xglh?from-embed

// ?CSS Modules
// ➤ CSS Modülleri, resmi bir özellik veya tarayıcıdaki bir uygulama değil, kapsam içine alınacak sınıf adlarını ve seçicileri değiştiren bir oluşturma adımındaki (Webpack veya Browserify'ın yardımıyla) bir süreçtir.
https://codesandbox.io/s/vigilant-hoover-k1613s?from-embed

// ?sass
// ➤ Install Sass by running this command in your terminal:Terminalinizde şu komutu çalıştırarak Sass'ı kurun:

// npm install sass
// yarn add sass
https://codesandbox.io/s/inspiring-nova-qql10r?from-embed

// ?Styled Components
// ➤ Tarz bileşenlerinin yüklenmesi yalnızca tek bir komut alır ve artık başlamaya hazırsınız:
// npm install styled-components
// yarn add styled-components
https://codesandbox.io/s/naughty-yonath-9o05v1?from-embed

//?● Using third-party libraries 
// *1-bootstrap
https://getbootstrap.com/docs/5.3/getting-started/introduction/
// *2-Tailwind
https://tailwindcss.com/docs/installation
// *3-Material UI
https://mui.com/material-ui/getting-started/
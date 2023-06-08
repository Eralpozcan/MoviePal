<script setup>
import { useMovieStore } from '@/stores/index'

const movieStore = useMovieStore()
</script>

<template>
  <div class="container py-5 my-5">
    <h3>{{ $t("About") }}</h3>
    <p class="my-5" v-if="movieStore.language === 'en'">
      Hello! This platform has been created for you to discover the best films and obtain information about them. Films
      are a powerful means of expressing various emotions and telling stories. We are here to share unforgettable and
      valuable films with you.

      This platform aims to bring you the richness of the cinema world. Films are considered works of art, each offering a
      unique way of storytelling. Our goal is to guide you in selecting films and highlight works that will inspire you.
      Additionally, we strive to provide detailed information about films, including the cast, directors, screenplays, and
      more, allowing you to explore further.

      The world of cinema encompasses a wide range of genres and eras. Therefore, we make an effort to include various
      film genres, ensuring that everyone can find something that matches their interests. Furthermore, we will regularly
      update the platform to keep you informed about the latest releases and trends in the film industry.

      Our aim is to provide you with a valuable film resource and an opportunity to explore the captivating world of
      cinema. We hope that the films found here will provoke thought, evoke emotions, and offer you new perspectives.
      Wishing you a great film experience.

      Best regards,
    </p>
    <p class="my-5" v-else>
      Merhaba! Bu platform, en iyi filmleri keşfetmeniz ve onlar hakkında bilgi edinmeniz için oluşturulmuştur. Filmler,
      farklı duyguları ifade etmenin ve hikayeleri anlatmanın güçlü bir yoludur. Burada, unutulmaz ve değerli filmleri
      sizinle paylaşmak amacıyla varız.
      Bu platform, sinema dünyasının zenginliklerini sizinle buluşturmayı hedefler. Filmler, birer sanat eseri olarak
      kabul edilir ve her biri farklı bir hikaye anlatma şekli sunar. Bizim amacımız, film seçiminde size rehberlik etmek
      ve size ilham verecek yapıtları vurgulamaktır. Aynı zamanda, filmler hakkında detaylı bilgi sunarak, oyuncuları,
      yönetmenleri, senaryoları ve daha fazlasını keşfetmenize olanak sağlamak istiyoruz.

      Sinema dünyası geniş bir yelpazede türler ve dönemler sunar. Bu nedenle, çeşitli film türlerine yer vermek için çaba
      gösteriyoruz, böylece herkesin ilgi alanına uygun bir şeyler bulabilmesini sağlıyoruz. Ayrıca, en son çıkan filmleri
      takip etmek ve sinema trendlerini keşfetmek için düzenli güncellemeler yapacağız.

    Amacımız, sizlere değerli bir film kaynağı sunmak ve sinemanın büyüleyici dünyasını keşfetme fırsatı vermek. Umarız
    burada bulunan filmler sizi düşündürür, duygulandırır ve yeni perspektifler sunar. Size iyi bir film deneyimi
    yaşamanızı dileriz.

    Saygılarımızla,
  </p>
</div></template>
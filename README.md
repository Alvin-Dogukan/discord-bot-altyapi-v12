# discord-bot-v12
Serendia Squad için geliştirilen ücretsiz bir alt yapıdır.
## İçerikler
* [Kurulum](#Kurulum)

## Ön Hazırlık
* Node.JS'i bilgisayarınıza kurun.
* Projeyi ZIP ya da bir klasör hâlinde bilgisayarınıza indirin.
* Masaüstünüze ya da bilgisayarınız herhangi bir yerine bir klasör oluşturun.
* İndirdiğiniz klasördeki tüm dosyaları o botun içerisine atın.


# Şimdi Kurulum Aşamasına
* `Ayarlar` klasörüne girin ve `Ayarlar.json`'un içerisinde olan `Token` ve `Prefix` ayarlarınızı yapın. Eğer `Ayarlar` dosyasının içerisindeki şeylerin ne işe yaradığını bilmiyorsan [Parametreler](#Parametreler) kısmını oku.

* CMD'yi yönetici olarak çalıştırıyoruz ve aşağıdaki adımları uyguluyoruz.

```
$ cd \path\to\klasörIsmi
$ npm install
```

Botumuzun genel kurulumunu yaptıktan sonra çalıştırma aşamasına geliyoruz, bot tamamen `index.js`'den çalıştırılması gerekiyor. Ayrıca, bot tamamen senkronize çalışıyor.
```
$ node .
```
Yazarak çalıştıramazsanız `node index.js` kullanmayı deneyin.

* Tada! Kurulum başarılı.


## Parametreler
* `Token`: Botunuzun aktif olabilmesi için size özel olarak verilen tokendir. `Varsayılan: YOK`
* `Prefix`: Komutlarınızın çalışması için kullanılacak ön ektir. `Varsayılan: !`
* `Özel_Sunucu`: Eğer bu botu 100'den fazla sunucuda kullanmayacaksanız ya da tek bir sunucuda kullanacaksanız bu özelliğin `true` olmasını öneririm, eğer değilse `false` yapabilirsin. `Varsayılan: true`
* `Debug`: Logs dosyasının içerisine ekstra olarak botun DEBUG hâlini yazdırıyor. Eğer botunuzu geliştiriyorsanız bunu kullanın ancak geliştirmeyi bitirdikten sonra kapatsanız fena olmaz.

## Bilgilendirme

Bu altyapı **Serendia Squad** sunucusu için **Alosha** tarafından hazırlanmıştır.

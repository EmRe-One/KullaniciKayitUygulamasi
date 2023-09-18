# Kullanıcı Kayıt Uygulaması

This is a simple user registration app built with React Native.
It is developed for a code interview.

The task is explained in more detail in the second section.

## Getting Started

> **Note**: Make sure you have completed
> the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) 
> instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start 

# Or directly with the React Native CLI
react-native start
```

### Step 2: Start your Application

Let Metro Bundler run in the terminal and press 
_a_ for running in Android (or Android emulator) or 
_i_ for running in iOS:

If everything is set up _correctly_, you should see your new app running in your _Android_ or _iOS_ device or emulator.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## The Task

I got the task in turkish. That is why I am copying it here as it is.

### Proje İsmi: 
Kullanıcı Kayıt Uygulaması

### Açıklama: 
Kullanıcı Kayıt Uygulaması, kullanıcıların kişisel ve kariyer bilgilerini kaydetmelerine ve bu
bilgilere erişmelerine olanak sağlayan bir mobil uygulamadır. Uygulama, kullanıcı dostu bir arayüze
sahip olacak ve kullanıcıların profil bilgilerini güvenli bir şekilde saklayacaktır.

### Teknolojiler ve Kütüphaneler:
- [x] React Native
- [x] React Navigation
- [ ] Formik
- [ ] Yup
- [ ] react-native-image-picker
- [ ] react-native-document-picker
- [ ] react-native-table-component
- [ ] react-native-chart-kit
- [ ] AsyncStorage veya SQLite

### Fake API: 
Fake verileri elde etmek için Fake JSON API'yi kullanacağız. Bu API, istediğimiz verileri
belirleyip, JSON formatında sunucudan alabilmemizi sağlayacak. Fake JSON API'ye aşağıdaki
linkten erişebilirsiniz: https://fakejson.com/
> #### ÇOK ÖNEMLİ: 
> Fakejson.com artık çalışmıyor. 
> - çalışıyor (< 12/2022): https://web.archive.org/web/20221210042444/https://fakejson.com/ 
> - çalışmıyor (> 01/2023): https://web.archive.org/web/20230128010908/https://fakejson.com/
> 
> Fake verileri elde etmek için başka bir API kullandim:
> https://designer.mocky.io/
 
### Ülke ve İl Bilgileri: 
Ülke ve il bilgilerini çekmek için Rest Countries API'yi kullanacağız. Bu API,
ülkeler ve bu ülkelere ait ilgili bilgileri sağlar. Rest Countries API'ye aşağıdaki linkten erişebilirsiniz:
https://restcountries.com/

### İş Akışı:

#### Kullanıcı Kayıt Ekranı:
- [ ] Fotoğraf: Kullanıcı, galerisinden bir fotoğraf seçecek.
- [ ] Ad Soyad: Kullanıcıdan ad ve soyad bilgisi istenecek.
- [ ] Ülke ve İller: Kullanıcı, ülke ve il bilgilerini bir listeden seçebilecek.
- [ ] Uniq Kimlik No: Kullanıcı, bir kimlik numarası girecek.
- [ ] Telefon: Kullanıcı, telefon numarası girecek.
- [ ] Doğum Tarihi: Kullanıcı, doğum tarihini seçecek.
- [ ] Cinsiyet: Kullanıcı, cinsiyetini seçecek.
- [ ] KVKK Onayı: Kullanıcı, KVKK onay metnini onaylamadan devam ekranına geçemeyecek.

#### Çalışma Durumu ve Meslek Bilgileri:
- [ ] Çalışma Durumu: Kullanıcı, çalışma durumunu seçecek (örneğin, öğrenci, çalışan, işsiz).
- [ ] Meslek: Kullanıcı, mesleğini girecek veya seçecek. 

#### Eğitim Seviyesi ve Yetkinlik Bilgileri:
- [ ] Eğitim Seviyesi: Kullanıcı, eğitim seviyesini seçecek (örneğin, ilkokul, lise, üniversite).
- [ ] Okul Bilgileri: Kullanıcı, okul adı, bölüm ve mezuniyet yılını girecek.
- [ ] Yetkinlik Dereceleri: Kullanıcı, yetkinliklerini ve derecelerini girecek.

#### CV ve Proje Alanı:
- [ ] CV: Kullanıcı, sadece PDF formatında bir CV yüklenebilecek.
- [ ] Projeler: Kullanıcı, isteğe bağlı olarak proje detayları girebilecek ve alanı artırıp silebilecek.

#### Kayıt Tamamlandı:
- [ ] Giriş Yap ve Dashboard Ekranı: Kullanıcı kaydını tamamladıktan sonra giriş yapabilecek ve dashboard ekranına yönlendirilecek.
- [ ] Profil Bilgileri: Dashboard ekranında, kullanıcının doldurduğu profil bilgileri görüntülenecek.

#### Dashboard Ekranı:
- [x] Dashboard ekranında widgetler bulunacak ve tasarımsal olarak kalabilir. Ek olarak, draw navigator ve tab navigator kullanılarak gezinme işlevselliği sağlanacaktır.

### NOT: 
Expo linki de paylaşabilirsiniz
Projenizi tamamlayıp GitHub yükledikten sonra proje linkini aşağıdaki alana cevap olarak
kaydetmeniz gerekmektedir. Proje ekran görüntülerini de GitHub reponuza yükleyebilirsiniz.
GitHub readme dosyasına ekran kaydı da eklemeniz gerekmektedir.

## Ekran Görüntüleri:

comming soon...

## Sorular:
- Kullanıcı kayıt ekranında niye kendisi bir uniq kimlik numarası girmek zorunda? Bu bilgiyi nereden alacak?
- Fakejson.com'dan aldığımız verileri ne icin kullanacağız? 
- Fakejson.com artik calismiyor
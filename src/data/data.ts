const defaultData: string[] = [
  "Edebiyat ve Romanlar",
  "Gerilim filmleri",
  "Çocuk kitapları",
  "Genç Yetişkin",
  "Yemek kitapları",
  "Seyahat kitapları",
  "Sanat, Fotoğrafçılık ve Mimarlık",
  "Psikoloji",
  "Aile ve; Sağlık",
  "Yönetim Kitapları",
  "Tüm kitaplar",
  "İngilizce kitaplar",
  "Almanca",
  "Fransızca",
  "İspanyol",
  "E-kitaplar ve; E-okuyucular",
  "E-kitaplar",
  "E-kitapların faydaları",
  "İngilizce'de en iyi 100",
  "Yeni yayınlananlar",
  "İkinci el kitaplar",
  "Magazin oku",
  "Müzik",
  "CD'ler",
  "LP'ler",
  "DVD'ler ve; Blu-ray'ler",
  "En iyi 100 albüm",
  "Bütün müzikler",
  "Filmler ve; Diziler",
  "Film",
  "TV dizisi",
  "Belgeseller",
  "En İyi 100 Film ve; Dizi",
  "Tüm filmler ve; diziler",
  "Oyunlar",
  "Playstation4",
  "Xbox One",
  "Nintendo Anahtarı",
  "PC Oyunları",
  "Nintendo 2DS/3DS",
  "Tüm platformlar",
  "Sanal gerçeklik",
  "Oyun İndirmeleri",
  "Rezerve etmek ",
  "Oyun Konsolları ve; Aksesuarları",
  "Bütün oyunlar",
  "Disney mağazası",
  "HBO mağazası",
  "Tüm hayran mağazaları",
  "Konsollarla ilgili tavsiyeler",
  "Festivalin olmazsa olmazları",
  "Müzik ve; Film Fırsatları",
  "Bilgisayar",
  "Dizüstü bilgisayarlar",
  "Masaüstü bilgisayarlar",
  "Monitörler",
  "Bilgisayar Aksesuarları",
  "Çantalar ve; Kılıflar",
  "Mürekkep Kartuşları ve; Tonerler",
  "Yazılım",
  "Ağ ve; İnternet",
  "Tüm bilgisayar öğeleri",
  "Telefon",
  "Telefon aksesuarları",
  "Akıllı telefonlar",
  "Tabletler",
  "Tablet aksesuarları",
  "Etkinlik takipçileri",
  "Akıllı saatler",
  "E-okuyucular",
  "Ev otomasyonu",
  "GPS sistemleri",
  "Ses ve; Hi-Fi",
  "Kablosuz hoparlörler",
  "Ses çubukları",
  "Kulaklıklar",
  "Bluetooth hoparlörler",
  "Tüm ses ve; hi-fi",
  "Televizyonlar",
  "Alıcılar ve; Yükselteçler",
  "Ev Sineması",
  "Fotoğraf kameraları",
  "Video kameralar",
  "Cihazlar",
  "Bahçe ve; Kendin Yap aletleri",
  "Kişisel Bakım",
  "Oyuncaklar",
  "Bulmacalar",
  "Oyunlar",
  "Bebek ve; Yeni Yürümeye Başlayan Çocuk",
  "Bina inşaatı",
  "Araçlar",
  "Bebekler ve; Sevimli Oyuncaklar",
  "Eğitici oyuncaklar",
  "Rol yapma",
  "Tahta oyuncak",
  "Sayı oyunları",
  "Tüm oyuncaklar",
  "Süslü Elbise",
  "Parti Malzemeleri",
  "Açık hava oyuncakları",
  "Denge bisikletleri",
  "Trambolinler",
  "Tüm dış mekan oyuncakları",
  "Hobi ve; Yaratıcı",
  "Çocuklar için el sanatları",
  "Boyama çizimi",
  "Tekstil ve; El Sanatları",
  "Ev dekorasyon",
  "Modelleme",
  "Model demiryolu",
  "RC araçları",
  "Dronlar",
  "Tüm hobiler ve; yaratıcı",
  "Popüler Karakterler",
  "Hoverboard'lar",
  "LEGO",
  "PLAYMOBİL",
  "VTech",
  "Balıkçı fiyatı",
  "Oyuncak promosyonları",
  "Çocuk giyim",
  "Bebek giysileri",
  "Kız kıyafetleri",
  "Erkek çocuk kıyafetleri",
  "Yeni geldi",
  "Satış",
  "Annem için kıyafetler",
  "Hamile kıyafetleri",
  "Çocuk Bezleri ve; Bakım",
  "Bebek bezi",
  "Banyo",
  "Tüm bakım",
  "Bebek monitörleri",
  "Bebek odası",
  "Çocuk odası",
  "Yatak takımı",
  "Sandalyeler",
  "Güvenlik",
  "Bebek kutuları",
  "Bebek ve; Küçük Çocuk Oyuncakları",
  "Yiyecek içecek",
  "Bebek maması",
  "Göğüs pompaları",
  "Bebek şişeleri",
  "Tüm yiyecek ve; içecekler",
  "Araba koltukları",
  "Bisiklet koltukları",
  "Arabalar",
  "Bebek arabaları",
  "Bebek taşıyıcıları ve; bezleri",
  "Yolda için her şey",
  "Doğum hediyeleri",
  "Bebek hediyeleri",
  "Doğum Listesi",
  "Tüm bebek eşyaları",
  "Lüks kozmetikler",
  "Makyaj yapmak",
  "Kadın parfümü",
  "Erkek parfümü",
  "Tüm parfümler",
  "Lüks bakım",
  "Vücut bakımı",
  "Saç Bakımı",
  "Yüz bakımı",
  "Tıraş ve; Epilasyon",
  "Ağız bakımı",
  "Güneş koruması",
  "Tüm kişisel bakım",
  "Sağlık",
  "Besin takviyeleri",
  "Kulaklık",
  "Zayıflama",
  "Optik",
  "Tüm sağlık",
  "Teçhizat",
  "Elektrikli diş fırçaları",
  "Tıraş ve; Düzeltme",
  "Elektrikli epilasyon",
  "Saç stili",
  "Kan basıncı monitörleri",
  "Tüm ekipman",
  "Yeni ürünler",
  "Lüks koleksiyon",
  "En İyi 10 Kadın Kokusu",
  "Eczane promosyonları",
  "Ev ürünleri",
  "Stil Dergisi",
  "Fark etmek, farkına varmak",
  "Ritüeller",
  "L'Oréal Paris",
  "Tüm lüks markalar",
  "Hepsi Güzel ve; Sağlıklı",
  "Mücevher",
  "Kadın takıları",
  "Erkek takıları",
  "Çocuk Takıları",
  "Yeni koleksiyon",
  "Saatler",
  "Kadın saatleri",
  "Erkek saatleri",
];

export interface dataType {
  id: number;
  name: string;
}

export const data: dataType[] = defaultData.map((item, index) => ({
  id: index + 1,
  name: item,
}));

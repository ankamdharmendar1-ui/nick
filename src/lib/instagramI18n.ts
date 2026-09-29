export interface InstagramLangData {
  langCode: string;
  hreflang: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  h1Prefix: string;
  h1Samples: string;
  p1: string;
  p2: string;
  gridTitle: string;
  clickToCopy: string;
  bioTitle: string;
  guideTitle: string;
  guideSteps: string[];
  guideTip: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  relatedTitle: string;
}

export const INSTAGRAM_LOCALES: Record<string, InstagramLangData> = {
  de: {
    langCode: "de",
    hreflang: "de",
    metaTitle: "Spitznamen für Instagram: A L O N E B O Y, angel_life ❤️ 🏆",
    metaDesc: "Benutzernamen-Generator für Instagram – stilvolle Namen, Schriften & Symbole zum Kopieren. Über 60 ästhetische Instagram-Namen mit 1-Klick-Kopieren.",
    keywords: ["spitznamen für instagram", "benutzernamen-generator für instagram", "instagram namen ideen", "ästhetische instagram namen", "instagram schriften"],
    h1Prefix: "Spitznamen für Instagram: ",
    h1Samples: "A L O N E  B O Y, angel_life ❤️",
    p1: "Der kostenlose Online Benutzernamen-Generator für Instagram hilft dir, kreative und ästhetische Spitznamen für dein Profil zu finden. Wähle aus über 60 Schriftstilen, Symbolen und trendigen Namen.",
    p2: "Klicke einfach auf einen Spitznamen, um ihn sofort zu kopieren. Verwende unseren Generator für stilvolle Schriftarten, um deinen eigenen Namen zu gestalten.",
    gridTitle: "Top 60 Spitznamen für Instagram 🏆",
    clickToCopy: "Klicken zum Kopieren",
    bioTitle: "Ästhetische Instagram Bio Ideen & Vorlagen",
    guideTitle: "So änderst du deinen Namen oder deine Bio auf Instagram",
    guideSteps: [
      "Öffne die Instagram-App und gehe auf dein Profil.",
      "Tippe auf 'Profil bearbeiten'.",
      "Kopiere einen Namen oder eine Bio-Vorlage von dieser Seite.",
      "Füge den Text in das Namens- oder Bio-Feld ein.",
      "Tippe oben rechts auf 'Fertig', um zu speichern."
    ],
    guideTip: "Tipp: Instagram unterstützt Unicode-Schriftarten im Namen- und Bio-Feld.",
    faqTitle: "Häufig gestellte Fragen zu Instagram-Spitznamen",
    faqs: [
      {
        q: "Wie bekomme ich einen stylischen Spitznamen für Instagram?",
        a: "Wähle einfach einen vorgefertigten Namen von dieser Seite oder nutze unseren Generator, um deinen eigenen Namen in stylische Schriften zu verwandeln."
      },
      {
        q: "Sind diese Instagram-Namen kostenlos?",
        a: "Ja, alle Namen und Symbole sind 100% kostenlos und ohne Anmeldung nutzbar."
      }
    ],
    relatedTitle: "Verwandte Generatoren",
  },
  br: {
    langCode: "br",
    hreflang: "pt-BR",
    metaTitle: "Apelidos para Instagram: A L O N E B O Y, angel_life ❤️ 🏆",
    metaDesc: "Gerador de nomes de usuário para Instagram – nomes, fontes e símbolos para copiar e usar. Mais de 60 apelidos para Instagram masculinos e femininos.",
    keywords: ["apelidos para instagram", "gerador de nomes de usuário para instagram", "nomes para instagram", "nomes de cria instagram", "letras para instagram"],
    h1Prefix: "Apelidos para Instagram: ",
    h1Samples: "A L O N E  B O Y, angel_life ❤️",
    p1: "O gerador de nomes de usuário para Instagram ajuda você a encontrar apelidos criativos, aesthetic e de cria para o seu perfil. Mais de 60 estilos com fontes especiais e símbolos.",
    p2: "Basta clicar em qualquer apelido para copiar instantaneamente. Use nossas ferramentas para criar nomes personalizados.",
    gridTitle: "Top 60 Apelidos para Instagram 🏆",
    clickToCopy: "Clique para copiar",
    bioTitle: "Ideias e Modelos de Bio Aesthetic para Instagram",
    guideTitle: "Como Mudar seu Nome ou Bio no Instagram",
    guideSteps: [
      "Abra o aplicativo do Instagram e vá para o seu Perfil.",
      "Toque em 'Editar perfil'.",
      "Copie um apelido ou modelo de bio desta página.",
      "Cole no campo Nome ou Bio.",
      "Toque em salvar no canto superior direito."
    ],
    guideTip: "Dica: O Instagram aceita fontes e símbolos Unicode no campo de Nome e Bio.",
    faqTitle: "Perguntas Frequentes sobre Apelidos para Instagram",
    faqs: [
      {
        q: "Como ter um nome estiloso no Instagram?",
        a: "Escolha qualquer apelido desta página ou use nosso gerador de texto para transformar seu nome com letras personalizadas e símbolos raros."
      },
      {
        q: "É gratuito usar esses apelidos no Instagram?",
        a: "Sim, 100% grátis e sem necessidade de cadastro."
      }
    ],
    relatedTitle: "Geradores Relacionados",
  },
  tr: {
    langCode: "tr",
    hreflang: "tr",
    metaTitle: "Instagram takma adları: A L O N E B O Y, angel_life ❤️ 🏆",
    metaDesc: "Instagram için kullanıcı adı ve takma adlar – mükemmel kullanıcı adını bulun ve oluşturun. Havalı fontlar, semboller ve biyografiler.",
    keywords: ["instagram takma adları", "instagram kullanıcı adı", "instagram şekilli nick", "instagram isimleri", "instagram biyografi sözleri"],
    h1Prefix: "Instagram takma adları: ",
    h1Samples: "A L O N E  B O Y, angel_life ❤️",
    p1: "Instagram için yaratıcı kullanıcı adları ve havalı takma adlar bulun. Profiliniz için 60'tan fazla şekilli yazı tipi, sembol ve biyografi şablonu hazır.",
    p2: "Kopyalamak için herhangi bir takma ada tıklamanız yeterlidir.",
    gridTitle: "En İyi 60 Instagram Takma Adı 🏆",
    clickToCopy: "Kopyalamak için tıkla",
    bioTitle: "Estetik Instagram Biyografi Fikirleri",
    guideTitle: "Instagram İsmi ve Biyografisi Nasıl Değiştirilir?",
    guideSteps: [
      "Instagram uygulamasını açın ve Profilinize gidin.",
      "'Profili Düzenle' seçeneğine dokunun.",
      "Bu sayfadan bir takma ad veya biyografi kopyalayın.",
      "İsim veya Biyografi alanına yapıştırın.",
      "Kaydetmek için sağ üstteki onay işaretine dokunun."
    ],
    guideTip: "İpucu: Instagram, isim ve biyografi alanlarında şekilli Unicode fontlarını destekler.",
    faqTitle: "Instagram Takma Adları Hakkında Sıkça Sorulan Sorular",
    faqs: [
      {
        q: "Instagram'da şekilli isim nasıl yazılır?",
        a: "Bu sayfadaki hazır isimleri kopyalayabilir veya Şekilli Yazı Yazma aracımızı kullanarak kendi isminizi dönüştürebilirsiniz."
      },
      {
        q: "Bu takma adlar ücretsiz mi?",
        a: "Evet, tamamen ücretsizdir ve üyelik gerektirmez."
      }
    ],
    relatedTitle: "İlgili Araçlar",
  },
  id: {
    langCode: "id",
    hreflang: "id",
    metaTitle: "Nama panggilan untuk Instagram: A L O N E B O Y, angel_life ❤️ 🏆",
    metaDesc: "Generator nama pengguna untuk Instagram – nama, font & simbol bergaya untuk disalin dan digunakan. 60+ nama IG keren & estetik.",
    keywords: ["nama panggilan untuk instagram", "nama ig keren", "generator nama pengguna untuk instagram", "nama aesthetic instagram", "font nama instagram"],
    h1Prefix: "Nama panggilan untuk Instagram: ",
    h1Samples: "A L O N E  B O Y, angel_life ❤️",
    p1: "Generator nama pengguna untuk Instagram membantu Anda menemukan nama panggilan aesthetic dan keren untuk profil Instagram Anda.",
    p2: "Cukup klik nama panggilan mana saja untuk langsung menyalin ke papan klip.",
    gridTitle: "Top 60 Nama Panggilan untuk Instagram 🏆",
    clickToCopy: "Klik untuk menyalin",
    bioTitle: "Template Bio Instagram Estetik",
    guideTitle: "Cara Mengganti Nama atau Bio di Instagram",
    guideSteps: [
      "Buka aplikasi Instagram dan buka Profil Anda.",
      "Ketuk 'Edit Profil'.",
      "Salin nama panggilan dari halaman ini.",
      "Tempel di kolom Nama atau Bio.",
      "Ketuk centang atau Selesai untuk menyimpan."
    ],
    guideTip: "Tips: Instagram mendukung font dan simbol unik di kolom Nama dan Bio.",
    faqTitle: "Pertanyaan yang Sering Diajukan",
    faqs: [
      {
        q: "Bagaimana cara membuat nama IG keren?",
        a: "Pilih nama dari daftar di atas atau gunakan alat teks keren kami untuk mengubah nama Anda sendiri."
      },
      {
        q: "Apakah nama-nama ini gratis digunakan?",
        a: "Ya, 100% gratis tanpa perlu daftar akun."
      }
    ],
    relatedTitle: "Generator Terkait",
  },
  ru: {
    langCode: "ru",
    hreflang: "ru",
    metaTitle: "Никнеймы для Instagram: A L O N E B O Y, angel_life ❤️ 🏆",
    metaDesc: "Генератор юзернеймов для Instagram — стильные имена, шрифты и символы для копирования. Более 60 ников для Инстаграма с символами.",
    keywords: ["никнеймы для instagram", "ники для инстаграма", "генератор юзернеймов для instagram", "красивые ники инстаграм", "шрифты для инстаграм"],
    h1Prefix: "Никнеймы для Instagram: ",
    h1Samples: "A L O N E  B O Y, angel_life ❤️",
    p1: "Генератор юзернеймов для Instagram поможет создать уникальный и эстетичный никнейм с красивыми шрифтами и редкими символами.",
    p2: "Просто нажмите на любой никнейм, чтобы моментально скопировать его в буфер обмена.",
    gridTitle: "Топ-60 Никнеймов для Instagram 🏆",
    clickToCopy: "Нажмите для копирования",
    bioTitle: "Идеи и шаблоны описания (Био) для Instagram",
    guideTitle: "Как изменить имя или био в Инстаграм",
    guideSteps: [
      "Откройте приложение Instagram и перейдите в свой профиль.",
      "Нажмите 'Редактировать профиль'.",
      "Скопируйте понравившийся никнейм с этой страницы.",
      "Вставьте его в поле 'Имя' или 'О себе'.",
      "Нажмите галочку в правом верхнем углу для сохранения."
    ],
    guideTip: "Совет: Инстаграм поддерживает символы Unicode в поле имени и описания профиля.",
    faqTitle: "Часто задаваемые вопросы",
    faqs: [
      {
        q: "Как сделать красивый ник в Инстаграм?",
        a: "Выберите любой готовый стиль на этой странице или используйте наш генератор красивых шрифтов."
      },
      {
        q: "Это бесплатно?",
        a: "Да, полностью бесплатно и без регистрации."
      }
    ],
    relatedTitle: "Похожие генераторы",
  },
  fr: {
    langCode: "fr",
    hreflang: "fr",
    metaTitle: "Surnoms pour Instagram: A L O N E B O Y, angel_life ❤️ 🏆",
    metaDesc: "Générateur de noms d'utilisateur pour Instagram – noms, polices et symboles à copier. Trouvez plus de 60 pseudos et surnoms stylés pour Instagram.",
    keywords: ["surnoms pour instagram", "pseudo instagram stylé", "générateur de noms d'utilisateur pour instagram", "noms instagram aesthetic", "police instagram"],
    h1Prefix: "Surnoms pour Instagram: ",
    h1Samples: "A L O N E  B O Y, angel_life ❤️",
    p1: "Générateur de noms d'utilisateur pour Instagram pour trouver des pseudos créatifs, esthétiques et originaux pour votre compte.",
    p2: "Cliquez simplement sur un pseudo pour le copier instantanément dans votre presse-papiers.",
    gridTitle: "Top 60 Surnoms pour Instagram 🏆",
    clickToCopy: "Cliquez pour copier",
    bioTitle: "Idées de Bio Aesthetic pour Instagram",
    guideTitle: "Comment modifier son nom ou sa bio sur Instagram",
    guideSteps: [
      "Ouvrez l'application Instagram et allez sur votre profil.",
      "Appuyez sur 'Modifier le profil'.",
      "Copiez un pseudo ou un modèle de bio de cette page.",
      "Collez-le dans le champ Nom ou Bio.",
      "Appuyez sur l'icône de validation pour enregistrer."
    ],
    guideTip: "Astuce : Instagram accepte les polices Unicode dans le nom et la bio.",
    faqTitle: "Questions Fréquentes",
    faqs: [
      {
        q: "Comment avoir un pseudo stylé sur Instagram ?",
        a: "Copiez l'un des modèles ci-dessus ou utilisez notre générateur d'écriture stylée pour convertir votre propre prénom."
      },
      {
        q: "Ces pseudos sont-ils gratuits ?",
        a: "Oui, 100% gratuit et sans inscription."
      }
    ],
    relatedTitle: "Générateurs associés",
  },
  jp: {
    langCode: "jp",
    hreflang: "ja",
    metaTitle: "Instagramのニックネーム: A L O N E B O Y, angel_life ❤️ 🏆",
    metaDesc: "Instagramのニックネーム＆ユーザー名生成ツール。おしゃれな英字フォント、特殊文字、記号付きのインスタ用名前をワンクリックでコピー。",
    keywords: ["Instagramのニックネーム", "インスタ ユーザー名 おしゃれ", "インスタ 名前 フォント", "インスタ 特殊文字", "インスタ bio かわいい"],
    h1Prefix: "Instagramのニックネーム: ",
    h1Samples: "A L O N E  B O Y, angel_life ❤️",
    p1: "Instagram用のおしゃれなニックネームとユーザー名を生成できる無料ツールです。韓国風・エモいフォントや可愛い記号付きの英語ネームを多数掲載。",
    p2: "好きな名前をクリックするだけで即座にクリップボードにコピーできます。",
    gridTitle: "Instagram人気ニックネーム60選 🏆",
    clickToCopy: "クリックしてコピー",
    bioTitle: "エモいInstagramプロフィール（Bio）テンプレート",
    guideTitle: "Instagramの名前やプロフィールの変更方法",
    guideSteps: [
      "Instagramアプリを開き、プロフィール画面を表示します。",
      "「プロフィールを編集」をタップします。",
      "このページからコピーしたニックネームを貼り付けます。",
      "右上の完了（チェックマーク）をタップして保存します。"
    ],
    guideTip: "ポイント: Instagramの名前欄と自己紹介欄にはUnicode特殊文字がそのまま使えます。",
    faqTitle: "よくある質問",
    faqs: [
      {
        q: "インスタでおしゃれな名前を付けるには？",
        a: "本ページの英語フォントやスペース文字（A L O N E  B O Y）を使うと一瞬でおしゃれなアカウントになります。"
      },
      {
        q: "完全無料で利用できますか？",
        a: "はい、登録不要で何度でも無料でコピーできます。"
      }
    ],
    relatedTitle: "関連ジェネレーター",
  },
  kr: {
    langCode: "kr",
    hreflang: "ko",
    metaTitle: "Instagram 닉네임: A L O N E B O Y, angel_life ❤️ 🏆",
    metaDesc: "인스타그램 닉네임 생성기 및 추천. 감성 글씨체, 특수문자, 인스타 감성 아이디와 소개글 템플릿을 원클릭으로 복사하세요.",
    keywords: ["Instagram 닉네임", "인스타 닉네임 추천", "인스타 아이디 감성", "인스타 글씨체 변환", "인스타 특수문자"],
    h1Prefix: "Instagram 닉네임: ",
    h1Samples: "A L O N E  B O Y, angel_life ❤️",
    p1: "인스타그램 감성 닉네임과 유니크한 아이디를 추천하는 무료 생성기입니다. 감성 영문 폰트, 하트 및 특수문자 조합을 제공합니다.",
    p2: "원하는 닉네임을 클릭하면 즉시 클립보드에 복사됩니다.",
    gridTitle: "인스타그램 추천 닉네임 60선 🏆",
    clickToCopy: "클릭하여 복사",
    bioTitle: "인스타 감성 소개글(Bio) 템플릿",
    guideTitle: "인스타그램 이름 및 소개글 변경 방법",
    guideSteps: [
      "인스타그램 앱을 열고 내 프로필로 이동합니다.",
      "'프로필 편집'을 누릅니다.",
      "원하는 닉네임이나 소개글을 복사하여 붙여넣습니다.",
      "우측 상단 완료를 눌러 저장합니다."
    ],
    guideTip: "팁: 인스타그램 이름과 소개글에는 유니코드 특수문자가 정상적으로 지원됩니다.",
    faqTitle: "자주 묻는 질문",
    faqs: [
      {
        q: "인스타 감성 닉네임은 어떻게 만드나요?",
        a: "자간이 넓은 영문 폰트나 특수기호를 함께 조합하면 세련된 프로필을 만들 수 있습니다."
      },
      {
        q: "무료인가요?",
        a: "네, 회원가입 없이 100% 무료로 사용할 수 있습니다."
      }
    ],
    relatedTitle: "관련 도구",
  },
  es: {
    langCode: "es",
    hreflang: "es",
    metaTitle: "Apodos para Instagram: A L O N E B O Y, angel_life ❤️ 🏆",
    metaDesc: "Apodos para Instagram y generador de nombres de usuario. Encuentra más de 60 nombres aesthetic, letras chidas y símbolos para tu perfil de Instagram.",
    keywords: ["apodos para instagram", "nombres para instagram aesthetic", "generador de nombres para instagram", "letras para instagram", "nombres chidos"],
    h1Prefix: "Apodos para Instagram: ",
    h1Samples: "A L O N E  B O Y, angel_life ❤️",
    p1: "Encuentra y crea el nombre de usuario perfecto para Instagram. Más de 60 apodos aesthetic, con letras chidas y símbolos listos para copiar.",
    p2: "Haz clic en cualquier apodo para copiarlo al portapapeles al instante.",
    gridTitle: "Top 60 Apodos para Instagram 🏆",
    clickToCopy: "Clic para copiar",
    bioTitle: "Ideas de Bio Aesthetic para Instagram",
    guideTitle: "Cómo cambiar tu nombre o biografía en Instagram",
    guideSteps: [
      "Abre Instagram y ve a tu perfil.",
      "Toca en 'Editar perfil'.",
      "Copia cualquier apodo o biografía de esta página.",
      "Pégalo en el campo Nombre o Biografía.",
      "Guarda los cambios con el icono de Listo."
    ],
    guideTip: "Consejo: Instagram admite fuentes Unicode en el nombre y en la biografía.",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      {
        q: "¿Cómo tener un nombre aesthetic en Instagram?",
        a: "Elige cualquiera de los apodos con letras espaciadas o símbolos de esta lista y cópialo directamente."
      },
      {
        q: "¿Son gratis estos apodos?",
        a: "Sí, 100% gratis y sin registros."
      }
    ],
    relatedTitle: "Generadores Relacionados",
  },
  it: {
    langCode: "it",
    hreflang: "it",
    metaTitle: "Soprannomi per Instagram: A L O N E B O Y, angel_life ❤️ 🏆",
    metaDesc: "Generatore di nomi utente per Instagram – nomi, font e simboli da copiare e usare. Oltre 60 soprannomi estetici e alla moda per Instagram.",
    keywords: ["soprannomi per instagram", "nomi per instagram", "generatore nomi utente instagram", "nomi aesthetic instagram", "font instagram"],
    h1Prefix: "Soprannomi per Instagram: ",
    h1Samples: "A L O N E  B O Y, angel_life ❤️",
    p1: "Generatore di nomi utente per Instagram per trovare soprannomi creativi, aesthetic e di tendenza per il tuo profilo.",
    p2: "Basta cliccare su qualsiasi soprannome per copiarlo subito.",
    gridTitle: "Top 60 Soprannomi per Instagram 🏆",
    clickToCopy: "Clicca per copiare",
    bioTitle: "Idee e Modelli di Bio Aesthetic per Instagram",
    guideTitle: "Come cambiare nome o bio su Instagram",
    guideSteps: [
      "Apri Instagram e vai sul tuo profilo.",
      "Tocca 'Modifica profilo'.",
      "Copia un nome o una bio da questa pagina.",
      "Incolla nel campo Nome o Bio.",
      "Tocca Fine per salvare."
    ],
    guideTip: "Consiglio: Instagram supporta caratteri speciali e simboli Unicode nel nome e nella biografia.",
    faqTitle: "Domande Frequenti",
    faqs: [
      {
        q: "Come avere un nome stiloso su Instagram?",
        a: "Usa i font spaziati e i caratteri speciali che trovi in questa lista con copia rapida in 1 clic."
      },
      {
        q: "È gratis?",
        a: "Sì, completamente gratuito e senza registrazione."
      }
    ],
    relatedTitle: "Generatori correlati",
  },
  hi: {
    langCode: "hi",
    hreflang: "hi",
    metaTitle: "Instagram के उपनाम: A L O N E B O Y, angel_life ❤️ 🏆",
    metaDesc: "इंस्टाग्राम के उपनाम और यूजरनेम जेनरेटर। 60+ स्टाइलिश इंस्टाग्राम नाम, एस्थेटिक फॉन्ट और बायो एक क्लिक में कॉपी करें।",
    keywords: ["Instagram के उपनाम", "इंस्टाग्राम नाम", "इंस्टाग्राम स्टाइलिश नाम", "instagram username ideas", "aesthetic instagram names"],
    h1Prefix: "Instagram के उपनाम: ",
    h1Samples: "A L O N E  B O Y, angel_life ❤️",
    p1: "इंस्टाग्राम के लिए बेस्ट और एस्थेटिक उपनाम और यूजरनेम खोजें। 60 से ज्यादा फॉन्ट स्टाइल्स और सिंबल तुरंत कॉपी करें।",
    p2: "किसी भी नाम पर क्लिक करके तुरंत कॉपी करें और अपनी प्रोफाइल पर पेस्ट करें।",
    gridTitle: "इंस्टाग्राम के 60 सबसे बेहतरीन उपनाम 🏆",
    clickToCopy: "कॉपी करने के लिए क्लिक करें",
    bioTitle: "इंस्टाग्राम बायो आइडियाज और टेम्पलेट्स",
    guideTitle: "इंस्टाग्राम में अपना नाम या बायो कैसे बदलें",
    guideSteps: [
      "इंस्टाग्राम ऐप खोलें और अपनी प्रोफाइल पर जाएं।",
      "'Edit Profile' पर टैप करें।",
      "इस पेज से पसंदीदा नाम या बायो कॉपी करें।",
      "Name या Bio फील्ड में पेस्ट करें।",
      "ऊपर दाईं ओर सही (✓) पर टैप करके सेव करें।"
    ],
    guideTip: "टिप: इंस्टाग्राम Name और Bio में स्टाइलिश यूनिकोड फॉन्ट्स सपोर्ट करता है।",
    faqTitle: "अक्सर पूछे जाने वाले सवाल",
    faqs: [
      {
        q: "इंस्टाग्राम पर स्टाइलिश नाम कैसे रखें?",
        a: "इस पेज पर दिए गए नामों में से कोई भी नाम चुनें और एक क्लिक में कॉपी करके इंस्टाग्राम पर पेस्ट करें।"
      },
      {
        q: "क्या यह फ्री है?",
        a: "हाँ, यह 100% फ्री है और किसी लॉगिन की जरूरत नहीं है।"
      }
    ],
    relatedTitle: "अन्य उपयोगी टूल्स",
  },
};

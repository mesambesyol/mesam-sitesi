import { QuizQuestion, QuizResultLevel } from '../types';

export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 1,
    question: {
      tr: 'İnsan vücudundaki en sert doku hangisidir?',
      en: 'Which is the hardest tissue in the human body?',
      de: 'Welches ist das härteste Gewebe im menschlichen Körper?',
    },
    options: [
      { tr: 'Kafatası kemiği', en: 'Skull bone', de: 'Schädelknochen' },
      { tr: 'Diş minesi', en: 'Tooth enamel', de: 'Zahnschmelz' },
      { tr: 'Uyluk kemiği', en: 'Femur', de: 'Oberschenkelknochen' },
      { tr: 'Tırnak', en: 'Fingernail', de: 'Fingernagel' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Diş minesi, %96\'dan fazlası mineralden oluşan yapısıyla insan vücudunda bulunan en sert ve en yüksek oranda mineralleşmiş dokudur. Bu yapı, dişlerimizi günlük çiğneme baskısına karşı korur.',
      en: 'Tooth enamel is the hardest and most highly mineralized tissue in the human body, with a structure composed of over 96% minerals. This structure protects our teeth against the daily pressure of chewing.',
      de: 'Der Zahnschmelz ist mit seiner zu über 96% aus Mineralien bestehenden Struktur das härteste und am stärksten mineralisierte Gewebe im menschlichen Körper. Diese Struktur schützt unsere Zähne vor dem täglichen Kaudruck.',
    },
  },
  {
    id: 2,
    question: {
      tr: 'Diş çürümesinin temel bilimsel nedeni aşağıdakilerden hangisidir?',
      en: 'What is the primary scientific cause of tooth decay?',
      de: 'Was ist die primäre wissenschaftliche Ursache von Karies?',
    },
    options: [
      { tr: 'Şekerin diş minesine doğrudan zarar vermesi', en: 'Sugar directly damaging tooth enamel', de: 'Zucker schädigt den Zahnschmelz direkt' },
      { tr: 'Ağızdaki bakterilerin, gıda artığındaki şekeri kullanarak asit üretmesi', en: 'Bacteria in the mouth producing acid by using sugar from food debris', de: 'Bakterien im Mund produzieren Säure durch die Verwendung von Zucker aus Speiseresten' },
      { tr: 'Çok sert yiyeceklerin dişlerde mikro çatlaklar oluşturması', en: 'Very hard foods creating micro-cracks in the teeth', de: 'Sehr harte Lebensmittel erzeugen Mikrorisse in den Zähnen' },
      { tr: 'Genetik olarak zayıf diş yapısına sahip olmak', en: 'Having a genetically weak tooth structure', de: 'Eine genetisch schwache Zahnstruktur haben' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Diş çürüğü, tek başına şeker yüzünden olmaz. Ağızda yaşayan bakteriler, özellikle şekerli ve karbonhidratlı gıda artıklarıyla beslenirler. Bu beslenme sonucunda ortaya çıkan asit, diş minesindeki mineralleri çözerek çürüğü başlatır.',
      en: 'Tooth decay is not caused by sugar alone. Bacteria living in the mouth feed on food debris, especially sugary and carbohydrate-rich ones. The acid produced as a result of this feeding dissolves the minerals in the tooth enamel, initiating decay.',
      de: 'Karies wird nicht allein durch Zucker verursacht. Bakterien im Mund ernähren sich von Speiseresten, insbesondere von zucker- und kohlenhydratreichen. Die dabei entstehende Säure löst die Mineralien im Zahnschmelz auf und leitet so Karies ein.',
    },
  },
    {
    id: 3,
    question: {
      tr: 'Dişleri fırçalarken görülen diş eti kanaması genellikle neyin habercisidir?',
      en: 'What does gum bleeding while brushing usually indicate?',
      de: 'Was bedeutet Zahnfleischbluten beim Zähneputzen normalerweise?',
    },
    options: [
      { tr: 'Dişlerin çok temiz olduğunun', en: 'That the teeth are very clean', de: 'Dass die Zähne sehr sauber sind' },
      { tr: 'Fırçanın çok sert olduğunun ve daha nazik fırçalamak gerektiğinin', en: 'That the brush is too hard and you need to brush more gently', de: 'Dass die Bürste zu hart ist und man sanfter putzen muss' },
      { tr: '"Gingivitis" olarak bilinen diş eti iltihabının başlangıcının', en: 'The beginning of gum inflammation known as "gingivitis"', de: 'Der Beginn einer Zahnfleischentzündung, bekannt als "Gingivitis"' },
      { tr: 'Vücudun demir fazlalığının', en: 'An excess of iron in the body', de: 'Ein Eisenüberschuss im Körper' },
    ],
    correctAnswerIndex: 2,
    explanation: {
      tr: 'Sağlıklı diş eti kanamaz. Genellikle kanamanın sebebi, diş yüzeyinde biriken ve iltihaba yol açan bakteri plağıdır. Kanama, vücudun bu iltihapla savaştığının bir işaretidir ve daha etkin bir ağız bakımı gerektiğini gösterir.',
      en: 'Healthy gums do not bleed. The cause of bleeding is usually bacterial plaque that has accumulated on the tooth surface, leading to inflammation. Bleeding is a sign that the body is fighting this inflammation and indicates that more effective oral care is needed.',
      de: 'Gesundes Zahnfleisch blutet nicht. Die Ursache für das Bluten ist in der Regel bakterieller Zahnbelag, der sich auf der Zahnoberfläche angesammelt hat und zu Entzündungen führt. Das Bluten ist ein Zeichen dafür, dass der Körper diese Entzündung bekämpft und eine effektivere Mundpflege erforderlich ist.',
    },
  },
  {
    id: 4,
    question: {
      tr: 'Özellikle asitli bir şeyler yiyip içtikten sonra dişleri fırçalamak için neden bir süre beklemek tavsiye edilir?',
      en: 'Why is it recommended to wait a while before brushing your teeth, especially after eating or drinking something acidic?',
      de: 'Warum wird empfohlen, nach dem Verzehr von sauren Speisen oder Getränken eine Weile mit dem Zähneputzen zu warten?',
    },
    options: [
      { tr: 'Mide asitlerinin ağza geri gelmesini önlemek için', en: 'To prevent stomach acids from coming back up into the mouth', de: 'Um zu verhindern, dass Magensäure in den Mund zurückfließt' },
      { tr: 'Asitlerin etkisiyle geçici olarak yumuşayan diş minesine fırçalayarak zarar vermemek için', en: 'To avoid damaging the tooth enamel that has been temporarily softened by the effects of acid', de: 'Um den durch Säure vorübergehend aufgeweichten Zahnschmelz nicht durch Bürsten zu beschädigen' },
      { tr: 'Tükürüğün asitleri tamamen temizlemesine zaman tanımak için', en: 'To give saliva time to completely clear the acids', de: 'Um dem Speichel Zeit zu geben, die Säuren vollständig zu neutralisieren' },
      { tr: 'Beklemeye gerek yoktur, hemen fırçalamak en iyisidir', en: 'There is no need to wait, brushing immediately is best', de: 'Es ist nicht nötig zu warten, sofortiges Putzen ist am besten' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Portakal suyu, gazlı içecekler gibi asitli gıdalar tüketildiğinde, diş minesi geçici olarak yumuşar. Bu durumda hemen fırçalamak, yumuşamış mine yüzeyinin aşınmasına (erozyon) neden olabilir. Yaklaşık 30 dakika beklemek, tükürüğün asidi nötralize etmesine ve minenin tekrar sertleşmesine olanak tanır.',
      en: 'When acidic foods like orange juice or carbonated drinks are consumed, the tooth enamel temporarily softens. Brushing immediately in this state can cause erosion of the softened enamel surface. Waiting about 30 minutes allows saliva to neutralize the acid and the enamel to reharden.',
      de: 'Wenn säurehaltige Lebensmittel wie Orangensaft oder kohlensäurehaltige Getränke konsumiert werden, weicht der Zahnschmelz vorübergehend auf. Sofortiges Zähneputzen in diesem Zustand kann zur Erosion der aufgeweichten Schmelzoberfläche führen. Etwa 30 Minuten zu warten, ermöglicht es dem Speichel, die Säure zu neutralisieren und dem Schmelz, wieder auszuhärten.',
    },
  },
  {
    id: 5,
    question: {
      tr: 'Sadece diş fırçalamak, diş yüzeylerinin yaklaşık yüzde kaçını temizler?',
      en: 'Brushing alone cleans approximately what percentage of the tooth surfaces?',
      de: 'Wie viel Prozent der Zahnoberflächen reinigt das Zähneputzen allein ungefähr?',
    },
    options: [
      { tr: '%100', en: '100%', de: '100%' },
      { tr: '%85', en: '85%', de: '85%' },
      { tr: '%60', en: '60%', de: '60%' },
      { tr: '%40', en: '40%', de: '40%' },
    ],
    correctAnswerIndex: 2,
    explanation: {
      tr: 'Diş fırçalamak ağız bakımının temel taşı olsa da, sadece dişlerin ön, arka ve üst yüzeylerine ulaşabilir. Dişlerin birbirine bakan ve diş eti ile birleşen ara yüzeyleri, toplam yüzeyin yaklaşık %40\'ını oluşturur ve bu bölgeler ancak diş ipi veya ara yüz fırçaları ile etkin bir şekilde temizlenebilir.',
      en: 'Although brushing is the cornerstone of oral care, it can only reach the front, back, and top surfaces of the teeth. The surfaces between the teeth, where they touch each other and meet the gum line, make up about 40% of the total surface area and can only be effectively cleaned with floss or interdental brushes.',
      de: 'Obwohl das Zähneputzen der Grundpfeiler der Mundpflege ist, kann es nur die Vorder-, Rück- und Oberseite der Zähne erreichen. Die Zwischenräume der Zähne, wo sie sich berühren und auf das Zahnfleisch treffen, machen etwa 40% der gesamten Oberfläche aus und können nur mit Zahnseide oder Interdentalbürsten effektiv gereinigt werden.',
    },
  },
  {
    id: 6,
    question: {
      tr: 'Diş minesi, başlangıç aşamasındaki küçük mineral kayıplarını hangi mekanizmayla kendi kendine onarabilir?',
      en: 'By what mechanism can tooth enamel repair minor mineral loss in its initial stages?',
      de: 'Durch welchen Mechanismus kann der Zahnschmelz geringfügigen Mineralverlust in den Anfangsstadien selbst reparieren?',
    },
    options: [
      { tr: 'Vücudun yeni mine hücreleri üretmesiyle', en: 'By the body producing new enamel cells', de: 'Indem der Körper neue Schmelzzellen produziert' },
      { tr: 'Dilin yüzeyi temizleyerek mineral biriktirmesiyle', en: 'By the tongue cleaning the surface and depositing minerals', de: 'Indem die Zunge die Oberfläche reinigt und Mineralien ablagert' },
      { tr: 'Tükürükteki kalsiyum ve fosfat mineralleri sayesinde (Remineralizasyon)', en: 'Thanks to the calcium and phosphate minerals in saliva (Remineralization)', de: 'Dank der Kalzium- und Phosphatmineralien im Speichel (Remineralisierung)' },
      { tr: 'Bu tür bir onarım mümkün değildir', en: 'This type of repair is not possible', de: 'Diese Art der Reparatur ist nicht möglich' },
    ],
    correctAnswerIndex: 2,
    explanation: {
      tr: 'Tükürük, sadece bir ıslatıcı sıvı değildir; aynı zamanda kalsiyum ve fosfat gibi değerli mineraller içerir. Asit ataklarından sonra, tükürük bu mineralleri diş minesine geri taşıyarak "remineralizasyon" adı verilen doğal bir onarım süreci başlatır. Florür, bu süreci hızlandırır ve destekler.',
      en: 'Saliva is not just a wetting agent; it also contains valuable minerals like calcium and phosphate. After acid attacks, saliva transports these minerals back to the tooth enamel, initiating a natural repair process called "remineralization." Fluoride accelerates and supports this process.',
      de: 'Speichel ist nicht nur ein Benetzungsmittel; er enthält auch wertvolle Mineralien wie Kalzium und Phosphat. Nach Säureangriffen transportiert der Speichel diese Mineralien zurück zum Zahnschmelz und leitet einen natürlichen Reparaturprozess namens "Remineralisierung" ein. Fluorid beschleunigt und unterstützt diesen Prozess.',
    },
  },
  {
    id: 7,
    question: {
      tr: 'Bir bebeğin süt dişleri ne zaman oluşmaya başlar?',
      en: 'When do a baby\'s primary (milk) teeth begin to form?',
      de: 'Wann beginnen sich die Milchzähne eines Babys zu bilden?',
    },
    options: [
      { tr: 'Doğumdan hemen sonra', en: 'Immediately after birth', de: 'Unmittelbar nach der Geburt' },
      { tr: 'Anne karnındayken', en: 'In the womb', de: 'Im Mutterleib' },
      { tr: '6 aylıkken', en: 'At 6 months old', de: 'Mit 6 Monaten' },
      { tr: '1 yaşındayken', en: 'At 1 year old', de: 'Mit 1 Jahr' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Süt dişlerinin tomurcukları, bebek henüz anne karnındayken, gebeliğin yaklaşık 6. haftasından itibaren oluşmaya başlar. Doğumda bu dişler çene kemiğinin içinde gelişimlerini sürdürür ve zamanı gelince diş etinden sürerler.',
      en: 'The buds of the primary teeth begin to form while the baby is still in the womb, starting from about the 6th week of pregnancy. At birth, these teeth continue to develop inside the jawbone and erupt through the gums when the time comes.',
      de: 'Die Knospen der Milchzähne beginnen sich zu bilden, während das Baby noch im Mutterleib ist, etwa ab der 6. Schwangerschaftswoche. Bei der Geburt entwickeln sich diese Zähne im Kieferknochen weiter und brechen zu gegebener Zeit durch das Zahnfleisch.',
    },
  },
  {
    id: 8,
    question: {
      tr: 'Diş fırçasıyla temizlenemeyen ve profesyonel diş temizliği gerektiren sertleşmiş bakteri plağına ne ad verilir?',
      en: 'What is the name for hardened bacterial plaque that cannot be removed by a toothbrush and requires professional dental cleaning?',
      de: 'Wie nennt man verhärteten bakteriellen Zahnbelag, der nicht mit einer Zahnbürste entfernt werden kann und eine professionelle Zahnreinigung erfordert?',
    },
    options: [
      { tr: 'Biyofilm', en: 'Biofilm', de: 'Biofilm' },
      { tr: 'Diş taşı (Tartar)', en: 'Tartar (Calculus)', de: 'Zahnstein (Tartarus)' },
      { tr: 'Mine lekesi', en: 'Enamel stain', de: 'Schmelzfleck' },
      { tr: 'Aft', en: 'Canker sore', de: 'Aphthe' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Bakteri plağı, düzenli fırçalama ile temizlenmediğinde tükürükteki minerallerle birleşerek sertleşir ve diş taşına (tartar) dönüşür. Diş taşı, pürüzlü yüzeyi nedeniyle daha fazla plak birikimine neden olur ve sadece diş hekimleri tarafından özel aletlerle temizlenebilir.',
      en: 'When bacterial plaque is not removed by regular brushing, it combines with minerals in saliva, hardens, and turns into tartar (calculus). Tartar, due to its rough surface, causes more plaque to accumulate and can only be removed by dental professionals using special tools.',
      de: 'Wenn bakterieller Zahnbelag nicht durch regelmäßiges Bürsten entfernt wird, verbindet er sich mit Mineralien im Speichel, verhärtet und wird zu Zahnstein (Tartarus). Zahnstein verursacht aufgrund seiner rauen Oberfläche eine stärkere Ansammlung von Plaque und kann nur von Zahnärzten mit speziellen Instrumenten entfernt werden.',
    },
  },
    {
    id: 9,
    question: {
      tr: 'Diş macunlarında bulunan florürün çürüğü önlemedeki en temel işlevi nedir?',
      en: 'What is the most fundamental function of fluoride in toothpaste in preventing cavities?',
      de: 'Was ist die grundlegendste Funktion von Fluorid in Zahnpasta zur Kariesprävention?',
    },
    options: [
      { tr: 'Bakterileri anında yok etmesi', en: 'Instantly killing bacteria', de: 'Bakterien sofort abzutöten' },
      { tr: 'Diş minesini asitlere karşı daha dirençli hale getirmesi', en: 'Making tooth enamel more resistant to acids', de: 'Den Zahnschmelz widerstandsfähiger gegen Säuren zu machen' },
      { tr: 'Diş yüzeyindeki lekeleri çıkarması', en: 'Removing stains from the tooth surface', de: 'Flecken von der Zahnoberfläche zu entfernen' },
      { tr: 'Ağız pH\'ını kalıcı olarak alkali yapması', en: 'Permanently making the mouth\'s pH alkaline', de: 'Den pH-Wert des Mundes dauerhaft alkalisch zu machen' },
    ],
    correctAnswerIndex: 1,
    explanation: {
      tr: 'Florür, dişin yapısına katılarak minenin kristal yapısını güçlendirir. Bu sayede, bakterilerin ürettiği asitlere karşı dişin savunmasını artırır ve çürük oluşumunu zorlaştırır. Ayrıca remineralizasyon sürecini de destekler.',
      en: 'Fluoride incorporates into the tooth structure, strengthening the enamel\'s crystal structure. This increases the tooth\'s defense against acids produced by bacteria, making cavity formation more difficult. It also supports the remineralization process.',
      de: 'Fluorid wird in die Zahnstruktur eingebaut und stärkt die Kristallstruktur des Schmelzes. Dadurch wird die Abwehr des Zahnes gegen von Bakterien produzierte Säuren erhöht und die Kariesbildung erschwert. Es unterstützt auch den Remineralisierungsprozess.',
    },
  },
  {
    id: 10,
    question: {
      tr: '"Ağız kuruluğu" (xerostomia) durumunun diş çürüğü riskini artırmasının temel sebebi nedir?',
      en: 'What is the main reason why "dry mouth" (xerostomia) increases the risk of tooth decay?',
      de: 'Was ist der Hauptgrund, warum "Mundtrockenheit" (Xerostomie) das Kariesrisiko erhöht?',
    },
    options: [
      { tr: 'Dilin hareket kabiliyetini azaltması', en: 'It reduces the tongue\'s mobility', de: 'Es verringert die Beweglichkeit der Zunge' },
      { tr: 'Yiyeceklerin tadını almayı zorlaştırması', en: 'It makes it harder to taste food', de: 'Es erschwert das Schmecken von Speisen' },
      { tr: 'Asitleri nötralize eden ve dişleri temizleyen tükürüğün azalması', en: 'A decrease in saliva, which neutralizes acids and cleans teeth', de: 'Eine Abnahme des Speichels, der Säuren neutralisiert und die Zähne reinigt' },
      { tr: 'Doğrudan ağız kokusuna neden olması', en: 'It directly causes bad breath', de: 'Es verursacht direkt Mundgeruch' },
    ],
    correctAnswerIndex: 2,
    explanation: {
      tr: 'Tükürük, ağzın doğal savunma mekanizmasıdır. Yiyecek artıklarını yıkar, asitleri nötralize eder ve içerdiği minerallerle dişleri onarır. Ağız kuruluğunda bu koruyucu etki azaldığı için çürük riski önemli ölçüde artar.',
      en: 'Saliva is the mouth\'s natural defense mechanism. It washes away food particles, neutralizes acids, and repairs teeth with the minerals it contains. In cases of dry mouth, this protective effect is diminished, significantly increasing the risk of cavities.',
      de: 'Speichel ist der natürliche Abwehrmechanismus des Mundes. Er spült Speisereste weg, neutralisiert Säuren und repariert Zähne mit den enthaltenen Mineralien.
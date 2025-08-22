
import React from 'react';
import { Service } from '../types';
import { 
  SparklesIcon, 
  ShieldCheckIcon, 
  ToothIcon, 
  AdjustmentsHorizontalIcon,
  DevicePhoneMobileIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
  HeartIcon,
  FaceSmileIcon
} from '../constants/icons';

export const SERVICES_DATA: Service[] = [
  {
    id: 'gulus-tasarimi',
    name: { tr: 'Gülüş Tasarımı', en: 'Smile Design', de: 'Lächel Design' },
    description: { 
      tr: 'Yüz hatlarınıza ve beklentilerinize en uygun, estetik ve doğal gülüşü dijital teknolojilerle tasarlıyoruz.',
      en: 'We design the most aesthetic and natural smile suitable for your facial features and expectations using digital technologies.',
      de: 'Wir gestalten das ästhetischste und natürlichste Lächeln, das zu Ihren Gesichtszügen und Erwartungen passt, mit digitalen Technologien.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Gülüş Tasarımı Nedir?</h2>
        <p class="mb-4">Gülüş tasarımı, sadece beyaz dişlerden daha fazlasını ifade eden, estetik diş hekimliğinin sanatsal ve bilimsel bir birleşimidir. Amacı; dişler, diş etleri, dudaklar ve yüz hatları arasında tam bir harmoni yaratarak kişiye özel, doğal ve estetik açıdan en çekici gülüşü yaratmaktır. Kliniğimizde, gelişmiş dijital teknolojiler kullanarak tedavi sonucunu daha en başından size gösteriyor, beklentilerinizi tam olarak karşılayacak bir planlama yapıyoruz.</p>
        
        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Kimler İçin Uygundur?</h2>
        <p class="mb-4">Gülüş tasarımı, gülüşünden estetik olarak memnun olmayan hemen herkes için uygun bir çözümdür. Özellikle aşağıdaki durumlarda etkili sonuçlar alınır:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Dişlerinin renginden, şeklinden veya boyutundan memnun olmayanlar.</li>
          <li>Dişleri arasında rahatsız edici boşluklar (diastema) bulunanlar.</li>
          <li>Hafif çapraşık veya dönük dişlere sahip olanlar.</li>
          <li>Kırık, aşınmış veya yıpranmış dişleri olanlar.</li>
          <li>Gülümserken diş etleri çok fazla görünenler (gummy smile).</li>
          <li>Eski ve estetik olmayan dolgu veya kaplamalara sahip olanlar.</li>
        </ul>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Tedavi Süreci Adım Adım Nasıl İşler?</h2>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Analiz ve Planlama:</strong> İlk muayenede diş hekimimiz beklentilerinizi dinler. Yüzünüzün, çene yapınızın ve dişlerinizin detaylı fotoğrafları ve dijital ölçüleri alınır.</li>
          <li><strong>Dijital Tasarım:</strong> Bu verilerle bilgisayar ortamında size özel bir gülüş tasarlanır. Bu aşamada, tedavi sonrası gülüşünüzün nasıl görüneceğini gösteren bir simülasyon (mock-up) hazırlanır ve onayınıza sunulur.</li>
          <li><strong>Hazırlık ve Uygulama:</strong> Onaylanan tasarıma göre gerekli işlemler (örneğin porselen laminalar için minimal aşındırma) yapılır ve geçici restorasyonlar takılır.</li>
          <li><strong>Kalıcı Uygulama:</strong> Laboratuvarda hazırlanan porselen laminalar, zirkonyum kaplamalar veya diğer restorasyonlar dişlerinize özel yapıştırıcılarla kalıcı olarak uygulanır.</li>
          <li><strong>Son Kontrol:</strong> Tedavinin sonunda son kontroller yapılır ve size yeni, göz alıcı gülüşünüzle ilgili bakım talimatları verilir.</li>
        </ol>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Avantajları Nelerdir?</h2>
         <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Kişiye Özeldir:</strong> Her tasarım, kişinin kendi yüz hatlarına ve estetik algısına göre özel olarak planlanır.</li>
          <li><strong>Doğal Görünüm:</strong> Kullanılan modern materyaller (zirkonyum, e-max) doğal dişin ışık geçirgenliğini ve görünümünü mükemmel bir şekilde taklit eder.</li>
          <li><strong>Özgüven Artışı:</strong> Estetik ve çekici bir gülüş, sosyal ve profesyonel hayatta pozitif bir etki yaratarak özgüveni artırır.</li>
          <li><strong>Öngörülebilir Sonuçlar:</strong> Dijital tasarım sayesinde tedavi sonucunu baştan görerek sürprizlerle karşılaşmazsınız.</li>
        </ul>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Tedavi Sonrası Dikkat Edilmesi Gerekenler</h2>
        <p class="mb-4">Yeni gülüşünüzün ömrünü uzatmak için düzenli ağız bakımı çok önemlidir. Dişlerinizi günde iki kez fırçalamalı, diş ipi kullanmalı ve 6 ayda bir düzenli olarak diş hekimi kontrolüne gitmelisiniz. Özellikle porselen restorasyonların rengini korumak için aşırı çay, kahve ve sigara tüketiminden kaçınmak faydalı olacaktır.</p>
        
        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h2>
        <details class="faq-item">
            <summary>Gülüş tasarımı ne kadar sürer?</summary>
            <div class="faq-answer"><p>Süreç, yapılacak işlemlere göre değişmekle birlikte, genellikle 2-4 seans arasında, yaklaşık 1-2 hafta içinde tamamlanır.</p></div>
        </details>
        <details class="faq-item">
            <summary>Tasarımı önceden görebilir miyim?</summary>
            <div class="faq-answer"><p>Evet, dijital gülüş tasarımı teknolojisi sayesinde tedaviye başlamadan önce bilgisayar ortamında veya ağzınıza uygulanan geçici bir modelle (mock-up) sonucun nasıl olacağını görebilirsiniz.</p></div>
        </details>
        <details class="faq-item">
            <summary>Porselen laminalar veya zirkonyumlar zamanla renk değiştirir mi?</summary>
            <div class="faq-answer"><p>Hayır. Yüksek kaliteli porselen ve zirkonyum materyalleri, çay, kahve gibi renklendiricilere karşı oldukça dirençlidir ve doğru bakımla renklerini yıllarca korurlar.</p></div>
        </details>`,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Smile Design?</h2>
        <p class="mb-4">Smile design is more than just white teeth; it's an artistic and scientific blend of aesthetic dentistry. Its purpose is to create a personalized, natural, and aesthetically pleasing smile by creating perfect harmony between the teeth, gums, lips, and facial features. In our clinic, we use advanced digital technologies to show you the treatment result from the very beginning, ensuring a plan that meets your expectations precisely.</p>
        
        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Who Is It For?</h2>
        <p class="mb-4">Smile design is a suitable solution for almost anyone who is aesthetically dissatisfied with their smile. Effective results are especially achieved in the following cases:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Those dissatisfied with the color, shape, or size of their teeth.</li>
          <li>Those with noticeable gaps (diastema) between their teeth.</li>
          <li>Those with slightly crooked or rotated teeth.</li>
          <li>Those with broken, worn, or chipped teeth.</li>
          <li>Those who show too much of their gums when they smile (gummy smile).</li>
          <li>Those with old and unaesthetic fillings or crowns.</li>
        </ul>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Step-by-Step Treatment Process</h2>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Analysis and Planning:</strong> In the first examination, our dentist listens to your expectations. Detailed photos and digital impressions of your face, jaw structure, and teeth are taken.</li>
          <li><strong>Digital Design:</strong> A custom smile is designed for you in a computer environment using this data. At this stage, a simulation (mock-up) showing what your post-treatment smile will look like is prepared and presented for your approval.</li>
          <li><strong>Preparation and Application:</strong> According to the approved design, necessary procedures (e.g., minimal tooth preparation for porcelain veneers) are performed, and temporary restorations are placed.</li>
          <li><strong>Permanent Application:</strong> Porcelain veneers, zirconium crowns, or other restorations prepared in the laboratory are permanently bonded to your teeth with special adhesives.</li>
          <li><strong>Final Check-up:</strong> At the end of the treatment, final checks are made, and you are given care instructions for your new, stunning smile.</li>
        </ol>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">What are the Advantages?</h2>
         <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Personalized:</strong> Each design is specially planned according to the person's own facial features and aesthetic perception.</li>
          <li><strong>Natural Appearance:</strong> Modern materials used (zirconium, e-max) perfectly mimic the light transmittance and appearance of natural teeth.</li>
          <li><strong>Increased Self-Confidence:</strong> An aesthetic and attractive smile creates a positive impact in social and professional life, boosting self-confidence.</li>
          <li><strong>Predictable Results:</strong> Thanks to digital design, you see the result from the beginning and avoid surprises.</li>
        </ul>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Post-Treatment Care</h2>
        <p class="mb-4">Regular oral care is crucial to extend the life of your new smile. You should brush your teeth twice a day, use dental floss, and have regular dental check-ups every 6 months. It is also beneficial to avoid excessive consumption of tea, coffee, and tobacco to preserve the color of porcelain restorations.</p>
        
        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h2>
        <details class="faq-item">
            <summary>How long does smile design take?</summary>
            <div class="faq-answer"><p>The process varies depending on the procedures to be performed, but it is generally completed within 2-4 sessions, over approximately 1-2 weeks.</p></div>
        </details>
        <details class="faq-item">
            <summary>Can I see the design beforehand?</summary>
            <div class="faq-answer"><p>Yes, thanks to digital smile design technology, you can see what the result will be in a computer environment or with a temporary model (mock-up) applied to your mouth before starting the treatment.</p></div>
        </details>
        <details class="faq-item">
            <summary>Do porcelain veneers or zirconium crowns change color over time?</summary>
            <div class="faq-answer"><p>No. High-quality porcelain and zirconium materials are highly resistant to staining from things like tea and coffee, and they maintain their color for years with proper care.</p></div>
        </details>`,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist Lächel-Design?</h2>
        <p class="mb-4">Lächel-Design ist mehr als nur weiße Zähne; es ist eine künstlerische und wissenschaftliche Mischung aus ästhetischer Zahnheilkunde. Sein Zweck ist es, ein personalisiertes, natürliches und ästhetisch ansprechendes Lächeln zu schaffen, indem eine perfekte Harmonie zwischen Zähnen, Zahnfleisch, Lippen und Gesichtszügen hergestellt wird. In unserer Klinik verwenden wir fortschrittliche digitale Technologien, um Ihnen das Behandlungsergebnis von Anfang an zu zeigen und einen Plan zu gewährleisten, der Ihre Erwartungen genau erfüllt.</p>
        
        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Für wen ist es geeignet?</h2>
        <p class="mb-4">Lächel-Design ist eine geeignete Lösung für fast jeden, der mit seinem Lächeln ästhetisch unzufrieden ist. Effektive Ergebnisse werden insbesondere in folgenden Fällen erzielt:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Die mit der Farbe, Form oder Größe ihrer Zähne unzufrieden sind.</li>
          <li>Die merkliche Lücken (Diastema) zwischen ihren Zähnen haben.</li>
          <li>Die leicht schiefe oder gedrehte Zähne haben.</li>
          <li>Die gebrochene, abgenutzte oder abgesplitterte Zähne haben.</li>
          <li>Die beim Lächeln zu viel von ihrem Zahnfleisch zeigen (Gummy Smile).</li>
          <li>Die alte und unästhetische Füllungen oder Kronen haben.</li>
        </ul>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Schritt-für-Schritt-Behandlungsprozess</h2>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Analyse und Planung:</strong> Bei der ersten Untersuchung hört unser Zahnarzt auf Ihre Erwartungen. Detaillierte Fotos und digitale Abdrücke von Ihrem Gesicht, Ihrer Kieferstruktur und Ihren Zähnen werden gemacht.</li>
          <li><strong>Digitales Design:</strong> Mit diesen Daten wird ein individuelles Lächeln für Sie in einer Computerumgebung entworfen. In dieser Phase wird eine Simulation (Mock-up) erstellt, die zeigt, wie Ihr Lächeln nach der Behandlung aussehen wird, und zur Genehmigung vorgelegt.</li>
          <li><strong>Vorbereitung und Anwendung:</strong> Gemäß dem genehmigten Design werden die notwendigen Verfahren (z. B. minimale Zahnpräparation für Porzellan-Veneers) durchgeführt und provisorische Restaurationen eingesetzt.</li>
          <li><strong>Dauerhafte Anwendung:</strong> Im Labor hergestellte Porzellan-Veneers, Zirkonkronen oder andere Restaurationen werden mit speziellen Klebstoffen dauerhaft an Ihren Zähnen befestigt.</li>
          <li><strong>Abschlusskontrolle:</strong> Am Ende der Behandlung werden letzte Überprüfungen vorgenommen, und Sie erhalten Pflegehinweise für Ihr neues, atemberaubendes Lächeln.</li>
        </ol>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Was sind die Vorteile?</h2>
         <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Personalisiert:</strong> Jedes Design wird speziell nach den Gesichtszügen und der ästhetischen Wahrnehmung der Person geplant.</li>
          <li><strong>Natürliches Aussehen:</strong> Verwendete moderne Materialien (Zirkon, E-max) ahmen die Lichtdurchlässigkeit und das Aussehen natürlicher Zähne perfekt nach.</li>
          <li><strong>Gesteigertes Selbstvertrauen:</strong> Ein ästhetisches und attraktives Lächeln schafft eine positive Wirkung im sozialen und beruflichen Leben und stärkt das Selbstvertrauen.</li>
          <li><strong>Vorhersagbare Ergebnisse:</strong> Dank des digitalen Designs sehen Sie das Ergebnis von Anfang an und vermeiden Überraschungen.</li>
        </ul>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Pflege nach der Behandlung</h2>
        <p class="mb-4">Regelmäßige Mundpflege ist entscheidend, um die Lebensdauer Ihres neuen Lächelns zu verlängern. Sie sollten Ihre Zähne zweimal täglich putzen, Zahnseide verwenden und alle 6 Monate zu regelmäßigen zahnärztlichen Kontrollen gehen. Es ist auch vorteilhaft, den übermäßigen Konsum von Tee, Kaffee und Tabak zu vermeiden, um die Farbe der Porzellanrestaurationen zu erhalten.</p>
        
        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h2>
        <details class="faq-item">
            <summary>Wie lange dauert ein Lächel-Design?</summary>
            <div class="faq-answer"><p>Der Prozess variiert je nach den durchzuführenden Verfahren, wird aber in der Regel innerhalb von 2-4 Sitzungen über etwa 1-2 Wochen abgeschlossen.</p></div>
        </details>
        <details class="faq-item">
            <summary>Kann ich das Design vorher sehen?</summary>
            <div class="faq-answer"><p>Ja, dank der digitalen Lächel-Design-Technologie können Sie vor Beginn der Behandlung in einer Computerumgebung oder mit einem auf Ihren Mund aufgetragenen provisorischen Modell (Mock-up) sehen, wie das Ergebnis aussehen wird.</p></div>
        </details>
        <details class="faq-item">
            <summary>Verfärben sich Porzellan-Veneers oder Zirkonkronen im Laufe der Zeit?</summary>
            <div class="faq-answer"><p>Nein. Hochwertige Porzellan- und Zirkonmaterialien sind sehr widerstandsfähig gegen Verfärbungen durch Dinge wie Tee und Kaffee und behalten bei richtiger Pflege jahrelang ihre Farbe.</p></div>
        </details>`
    },
    icon: React.createElement(SparklesIcon),
    imageUrl: 'https://i.imgur.com/zXyZdEH.jpg',
  },
  {
    id: 'implantoloji-cene-cerrahisi',
    name: { tr: 'İmplantoloji / Çene Cerrahisi', en: 'Implantology / Jaw Surgery', de: 'Implantologie / Kieferchirurgie' },
    description: {
      tr: 'Eksik dişleriniz için doğal dişe en yakın, kalıcı ve güvenilir çözümler sunan implant tedavileri ve cerrahi operasyonlar.',
      en: 'Implant treatments and surgical operations offering permanent and reliable solutions for your missing teeth, closest to natural teeth.',
      de: 'Implantatbehandlungen und chirurgische Eingriffe, die dauerhafte und zuverlässige Lösungen für Ihre fehlenden Zähne bieten, die den natürlichen Zähnen am nächsten kommen.'
    },
    longDescription: {
      tr: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">İmplantoloji Nedir?</h2>
        <p class="mb-4">İmplantoloji, eksik dişlerin yerine çene kemiğine yerleştirilen, titanyumdan yapılmış yapay diş kökleri (diş implantları) kullanarak fonksiyon ve estetiğin yeniden kazandırılmasıdır. Diş implantları, üzerine yerleştirilecek olan kuron (kaplama), köprü veya protezler için sağlam bir temel oluşturur. Çene cerrahisi ise gömülü 20 yaş diş çekimleri, kist operasyonları ve kemik yetersizliklerinin giderilmesi gibi daha geniş bir alanı kapsar.</p>
        
        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Kimler İçin Uygundur?</h2>
        <p class="mb-4">Genel sağlık durumu iyi olan ve çene kemiği yapısı implant yerleşimine uygun olan herkese implant tedavisi uygulanabilir. Tedavi için uygun adaylar şunlardır:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Tek dişini, birden fazla dişini veya tüm dişlerini kaybetmiş olanlar.</li>
          <li>Hareketli protez kullanmakta zorlanan veya kullanmak istemeyenler.</li>
          <li>Çiğneme ve konuşma fonksiyonlarını tam olarak geri kazanmak isteyenler.</li>
          <li>Eksik diş boşluğunun yanındaki sağlıklı dişlere dokunulmasını istemeyenler.</li>
        </ul>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Tedavi Süreci Adım Adım Nasıl İşler?</h2>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Muayene ve Planlama:</strong> 3D dental tomografi ile çene kemiğinizin durumu detaylıca incelenir ve implantların konumu hassas bir şekilde planlanır.</li>
          <li><strong>Cerrahi Aşama:</strong> Lokal anestezi altında, implant için çene kemiğinde bir yuva hazırlanır ve titanyum implant bu yuvaya yerleştirilir. İşlem genellikle ağrısızdır.</li>
          <li><strong>İyileşme (Osseointegrasyon):</strong> İmplantın çene kemiği ile biyolojik olarak kaynaşması için 2 ila 6 ay beklenir. Bu süreç, tedavinin başarısı için kritiktir.</li>
          <li><strong>Protez Aşaması:</strong> İyileşme tamamlandıktan sonra implantın üzerine, diş etini şekillendirecek bir parça takılır. Birkaç hafta sonra ölçü alınarak üzerine gelecek olan kalıcı porselen veya zirkonyum diş hazırlanır ve implant üzerine takılır.</li>
        </ol>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Avantajları Nelerdir?</h2>
         <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Doğal Dişe En Yakın Çözüm:</strong> Hem görünüm hem de fonksiyon olarak doğal diş hissi verir.</li>
          <li><strong>Koruyucu Yaklaşım:</strong> Köprü protezlerinden farklı olarak, komşu sağlıklı dişlerin kesilmesine gerek kalmaz.</li>
          <li><strong>Uzun Ömürlü ve Dayanıklı:</strong> İyi bir ağız bakımı ile ömür boyu sorunsuz kullanılabilirler.</li>
          <li><strong>Çene Kemiğini Korur:</strong> Diş eksikliğinde zamanla eriyen çene kemiğini, üzerine gelen çiğneme kuvvetlerini ileterek korur ve kemik kaybını önler.</li>
          <li><strong>Yüksek Konfor:</strong> Sabit oldukları için hareketli protezler gibi takıp çıkarma derdi veya damak vurması gibi sorunlar yaşanmaz.</li>
        </ul>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Tedavi Sonrası Dikkat Edilmesi Gerekenler</h2>
        <p class="mb-4">İmplantlarınızın başarılı ve uzun ömürlü olması için ağız hijyenine maksimum özen gösterilmelidir. Normal dişlerinizi fırçalar gibi implant üstü protezlerinizi de fırçalamalı, diş ipi veya özel arayüz fırçaları kullanarak implant çevresini temizlemelisiniz. Ayrıca 6 aylık periyodik diş hekimi kontrolleri ihmal edilmemelidir.</p>
        
        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Sıkça Sorulan Sorular</h2>
        <details class="faq-item">
            <summary>İmplant tedavisi ağrılı mıdır?</summary>
            <div class="faq-answer"><p>Hayır. İşlem lokal anestezi altında yapıldığı için tamamen ağrısızdır. İşlem sonrası oluşabilecek hafif ağrılar ise hekiminizin önereceği ağrı kesicilerle kolayca kontrol altına alınır.</p></div>
        </details>
        <details class="faq-item">
            <summary>İmplantların ömrü ne kadardır?</summary>
            <div class="faq-answer"><p>Diş implantları, doğru bir şekilde uygulandığında ve hasta tarafından iyi bir ağız bakımı yapıldığında ömür boyu dayanabilen bir tedavidir. Kendi dişleriniz gibi düzenli bakım gerektirirler.</p></div>
        </details>
        <details class="faq-item">
            <summary>Herkes implant yaptırabilir mi?</summary>
            <div class="faq-answer"><p>Kontrol altında olmayan sistemik hastalıkları (şeker hastalığı gibi) olanlar veya yoğun sigara içenler gibi bazı risk grupları dışında, genel sağlık durumu iyi olan çoğu yetişkin için implant uygun bir seçenektir. Kemik yoğunluğunun yetersiz olduğu durumlarda ise kemik tozu (greft) uygulamaları ile kemik hacmi artırılarak implant yapılabilir.</p></div>
        </details>`,
      en: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">What is Implantology?</h2>
        <p class="mb-4">Implantology is the restoration of function and aesthetics by using artificial tooth roots (dental implants) made of titanium, which are placed in the jawbone to replace missing teeth. Dental implants provide a solid foundation for crowns, bridges, or dentures that will be placed on them. Jaw surgery covers a broader field, including impacted wisdom tooth extractions, cyst operations, and the correction of bone deficiencies.</p>
        
        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Who Is It For?</h2>
        <p class="mb-4">Implant treatment can be applied to anyone with good general health and a jawbone structure suitable for implant placement. Suitable candidates for the treatment include:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Those who have lost a single tooth, multiple teeth, or all their teeth.</li>
          <li>Those who have difficulty with or do not want to use removable dentures.</li>
          <li>Those who want to fully regain their chewing and speaking functions.</li>
          <li>Those who do not want the healthy teeth next to the missing tooth gap to be touched.</li>
        </ul>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Step-by-Step Treatment Process</h2>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Examination and Planning:</strong> The condition of your jawbone is examined in detail with 3D dental tomography, and the position of the implants is precisely planned.</li>
          <li><strong>Surgical Phase:</strong> Under local anesthesia, a socket is prepared in the jawbone for the implant, and the titanium implant is placed in this socket. The procedure is generally painless.</li>
          <li><strong>Healing (Osseointegration):</strong> A waiting period of 2 to 6 months is required for the implant to biologically fuse with the jawbone. This process is critical for the success of the treatment.</li>
          <li><strong>Prosthetic Phase:</strong> After healing is complete, a piece is attached to the implant to shape the gum. After a few weeks, an impression is taken to prepare the permanent porcelain or zirconium tooth, which is then attached to the implant.</li>
        </ol>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">What are the Advantages?</h2>
         <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Closest Solution to Natural Teeth:</strong> Provides the feel of a natural tooth in both appearance and function.</li>
          <li><strong>Conservative Approach:</strong> Unlike bridges, there is no need to cut adjacent healthy teeth.</li>
          <li><strong>Long-lasting and Durable:</strong> They can be used for a lifetime with good oral care.</li>
          <li><strong>Preserves Jawbone:</strong> It protects the jawbone, which resorbs over time in case of tooth loss, by transmitting the chewing forces, thus preventing bone loss.</li>
          <li><strong>High Comfort:</strong> Since they are fixed, there are no problems like the hassle of removing and inserting dentures or gum soreness.</li>
        </ul>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Post-Treatment Care</h2>
        <p class="mb-4">Maximum attention to oral hygiene is essential for the success and longevity of your implants. You should brush your implant-supported prostheses just like your natural teeth and clean around the implant using dental floss or special interdental brushes. Also, periodic dental check-ups every 6 months should not be neglected.</p>
        
        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Frequently Asked Questions</h2>
        <details class="faq-item">
            <summary>Is implant treatment painful?</summary>
            <div class="faq-answer"><p>No. The procedure is completely painless as it is performed under local anesthesia. Any mild pain that may occur after the procedure can be easily controlled with painkillers prescribed by your dentist.</p></div>
        </details>
        <details class="faq-item">
            <summary>What is the lifespan of implants?</summary>
            <div class="faq-answer"><p>Dental implants are a lifelong treatment when applied correctly and maintained with good oral care by the patient. They require regular maintenance just like your own teeth.</p></div>
        </details>
        <details class="faq-item">
            <summary>Can anyone get implants?</summary>
            <div class="faq-answer"><p>Except for some risk groups such as those with uncontrolled systemic diseases (like diabetes) or heavy smokers, implants are a suitable option for most adults with good general health. In cases of insufficient bone density, implants can be placed after increasing the bone volume with bone grafting procedures.</p></div>
        </details>`,
      de: `
        <h2 class="text-2xl font-bold text-brand-blue mb-4">Was ist Implantologie?</h2>
        <p class="mb-4">Die Implantologie ist die Wiederherstellung von Funktion und Ästhetik durch den Einsatz künstlicher Zahnwurzeln (Zahnimplantate) aus Titan, die zur Ersetzung fehlender Zähne in den Kieferknochen eingesetzt werden. Zahnimplantate bieten eine solide Grundlage für Kronen, Brücken oder Prothesen, die darauf platziert werden. Die Kieferchirurgie umfasst ein breiteres Feld, einschließlich der Extraktion impaktierter Weisheitszähne, Zystenoperationen und der Korrektur von Knochendefiziten.</p>
        
        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Für wen ist es geeignet?</h2>
        <p class="mb-4">Eine Implantatbehandlung kann bei jedem mit guter Allgemeingesundheit und einer für die Implantatplatzierung geeigneten Kieferknochenstruktur durchgeführt werden. Geeignete Kandidaten für die Behandlung sind:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Personen, die einen einzelnen Zahn, mehrere Zähne oder alle Zähne verloren haben.</li>
          <li>Personen, die Schwierigkeiten mit herausnehmbaren Prothesen haben oder diese nicht verwenden möchten.</li>
          <li>Personen, die ihre Kau- und Sprechfunktionen vollständig wiedererlangen möchten.</li>
          <li>Personen, die nicht möchten, dass die gesunden Zähne neben der Zahnlücke berührt werden.</li>
        </ul>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Schritt-für-Schritt-Behandlungsprozess</h2>
        <ol class="list-decimal list-inside space-y-3 mb-4">
          <li><strong>Untersuchung und Planung:</strong> Der Zustand Ihres Kieferknochens wird mit 3D-Dental-Tomographie detailliert untersucht, und die Position der Implantate wird präzise geplant.</li>
          <li><strong>Chirurgische Phase:</strong> Unter örtlicher Betäubung wird im Kieferknochen ein Bett für das Implantat vorbereitet, und das Titanimplantat wird in dieses Bett eingesetzt. Der Eingriff ist im Allgemeinen schmerzfrei.</li>
          <li><strong>Heilung (Osseointegration):</strong> Eine Wartezeit von 2 bis 6 Monaten ist erforderlich, damit das Implantat biologisch mit dem Kieferknochen verwachsen kann. Dieser Prozess ist entscheidend für den Erfolg der Behandlung.</li>
          <li><strong>Prothetische Phase:</strong> Nach Abschluss der Heilung wird ein Teil auf das Implantat aufgesetzt, um das Zahnfleisch zu formen. Nach einigen Wochen wird ein Abdruck genommen, um den permanenten Porzellan- oder Zirkonzahn vorzubereiten, der dann auf das Implantat aufgesetzt wird.</li>
        </ol>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Was sind die Vorteile?</h2>
         <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Die naturnächste Lösung:</strong> Bietet das Gefühl eines natürlichen Zahnes in Aussehen und Funktion.</li>
          <li><strong>Konservativer Ansatz:</strong> Im Gegensatz zu Brücken müssen benachbarte gesunde Zähne nicht beschliffen werden.</li>
          <li><strong>Langlebig und haltbar:</strong> Sie können bei guter Mundpflege ein Leben lang verwendet werden.</li>
          <li><strong>Erhält den Kieferknochen:</strong> Es schützt den Kieferknochen, der bei Zahnverlust mit der Zeit abgebaut wird, indem es die Kaukräfte überträgt und so den Knochenverlust verhindert.</li>
          <li><strong>Hoher Komfort:</strong> Da sie festsitzend sind, gibt es keine Probleme wie das lästige Einsetzen und Herausnehmen von Prothesen oder Zahnfleischschmerzen.</li>
        </ul>

        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Pflege nach der Behandlung</h2>
        <p class="mb-4">Maximale Aufmerksamkeit für die Mundhygiene ist für den Erfolg und die Langlebigkeit Ihrer Implantate unerlässlich. Sie sollten Ihre implantatgetragenen Prothesen genauso wie Ihre natürlichen Zähne putzen und den Bereich um das Implantat mit Zahnseide oder speziellen Interdentalbürsten reinigen. Auch regelmäßige zahnärztliche Kontrollen alle 6 Monate sollten nicht vernachlässigt werden.</p>
        
        <h2 class="text-2xl font-bold text-brand-blue mt-8 mb-4">Häufig gestellte Fragen</h2>
        <details class="faq-item">
            <summary>Ist eine Implantatbehandlung schmerzhaft?</summary>
            <div class="faq-answer"><p>Nein. Der Eingriff ist völlig schmerzfrei, da er unter örtlicher Betäubung durchgeführt wird. Leichte Schmerzen, die nach dem Eingriff auftreten können, lassen sich mit von Ihrem Zahnarzt verschriebenen Schmerzmitteln leicht kontrollieren.</p></div>
        </details>
        <details class="faq-item">
            <summary>Wie lange halten Implantate?</summary>
            <div class="faq-answer"><p>Zahnimplantate sind eine lebenslange Behandlung, wenn sie korrekt eingesetzt und vom Patienten gut gepflegt werden. Sie erfordern regelmäßige Pflege genau wie Ihre eigenen Zähne.</p></div>
        </details>
        <details class="faq-item">
            <summary>Kann jeder Implantate bekommen?</summary>
            <div class="faq-answer"><p>Außer bei einigen Risikogruppen wie Personen mit unkontrollierten systemischen Erkrankungen (wie Diabetes) oder starken Rauchern sind Implantate für die meisten Erwachsenen mit guter Allgemeingesundheit eine geeignete Option. In Fällen unzureichender Knochendichte können Implantate nach einer Erhöhung des Knochenvolumens durch Knochenaufbauverfahren eingesetzt werden.</p></div>
        </details>`
    },
    icon: React.createElement(ShieldCheckIcon),
    imageUrl: 'https://i.imgur.com/vX6QMpE.jpg',
  },
  {
    id: 'estetik-dis-hekimligi',
    name: { tr: 'Estetik Diş Hekimliği', en: 'Aesthetic Dentistry', de: 'Ästhetische Zahnheilkunde' },
    description: {
      tr: 'Gülüşünüzü sanata dönüştüren uygulamalarla tanışın: Diş beyazlatma, porselen laminalar, bonding ve daha fazlası.',
      en: 'Discover the applications that turn your smile into a work of art: teeth whitening, porcelain laminates, bonding, and more.',
      de: 'Entdecken Sie die Anwendungen, die Ihr Lächeln in ein Kunstwerk verwandeln: Zahnaufhellung, Porzellanlaminate, Bonding und mehr.'
    },
    longDescription: {
      tr: `
        <p class="mb-4">Estetik diş hekimliği, sağlıklı bir ağız yapısının yanı sıra, güzel ve çekici bir gülüşe sahip olmanızı hedefler. Dişlerin rengi, şekli, boyutu ve dizilimindeki kusurları gidererek, yüzünüzle uyumlu, doğal bir gülümseme yaratır.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Sunduğumuz Estetik Çözümler</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Diş Beyazlatma (Bleaching):</strong> Klinik ortamında veya evde uygulanan yöntemlerle dişlerinizin rengini güvenli bir şekilde açarak daha parlak bir gülüş elde etmenizi sağlar.</li>
          <li><strong>Porselen Laminalar (Veneers):</strong> Dişlerin ön yüzeyine yapıştırılan ince porselen yaprakçıklar ile renklenmeler, aralıklar ve hafif çapraşıklıklar mükemmel bir şekilde kapatılır.</li>
          <li><strong>Bonding (Kompozit Lamina):</strong> Küçük estetik kusurların (küçük kırıklar, aralıklar) diş rengindeki kompozit materyallerle tek seansta düzeltilmesi işlemidir.</li>
          <li><strong>Zirkonyum ve E-max Kronlar:</strong> Metal içermeyen, yüksek ışık geçirgenliğine sahip bu kaplamalar, doğal diş görünümünü taklit ederek estetik ve dayanıklılığı bir arada sunar.</li>
          <li><strong>Pembe Estetik (Diş Eti Estetiği):</strong> Diş eti seviyelerinin ayarlanması gibi işlemlerle ideal diş eti görünümü sağlanır.</li>
        </ul>
        <p>Özgüvenle gülümsemek, sosyal ve profesyonel hayatınızda pozitif bir etki yaratır. Size en uygun estetik çözümü belirlemek için kliniğimize danışabilirsiniz.</p>`,
      en: `
        <p class="mb-4">Aesthetic dentistry aims for you to have not only a healthy oral structure but also a beautiful and attractive smile. It creates a natural smile in harmony with your face by correcting imperfections in the color, shape, size, and alignment of your teeth.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Our Aesthetic Solutions</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Teeth Whitening (Bleaching):</strong> Allows you to achieve a brighter smile by safely lightening the color of your teeth with methods applied in the clinic or at home.</li>
          <li><strong>Porcelain Laminates (Veneers):</strong> Thin porcelain shells bonded to the front surfaces of the teeth perfectly cover discolorations, gaps, and minor misalignments.</li>
          <li><strong>Bonding (Composite Laminate):</strong> The process of correcting minor aesthetic flaws (small fractures, gaps) with tooth-colored composite materials in a single session.</li>
          <li><strong>Zirconium and E-max Crowns:</strong> These metal-free crowns with high light transmittance offer both aesthetics and durability by mimicking the appearance of natural teeth.</li>
          <li><strong>Pink Aesthetics (Gum Aesthetics):</strong> The ideal gum appearance is achieved with procedures such as adjusting gum levels.</li>
        </ul>
        <p>Smiling with confidence creates a positive impact in your social and professional life. You can consult our clinic to determine the most suitable aesthetic solution for you.</p>`,
      de: `
        <p class="mb-4">Die ästhetische Zahnheilkunde zielt darauf ab, dass Sie nicht nur eine gesunde Mundstruktur, sondern auch ein schönes und attraktives Lächeln haben. Sie schafft ein natürliches Lächeln im Einklang mit Ihrem Gesicht, indem sie Unvollkommenheiten in Farbe, Form, Größe und Ausrichtung Ihrer Zähne korrigiert.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Unsere ästhetischen Lösungen</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Zahnaufhellung (Bleaching):</strong> Ermöglicht Ihnen ein strahlenderes Lächeln, indem die Farbe Ihrer Zähne mit in der Klinik oder zu Hause angewandten Methoden sicher aufgehellt wird.</li>
          <li><strong>Porzellanlaminate (Veneers):</strong> Dünne Porzellanschalen, die auf die Vorderseite der Zähne geklebt werden, decken Verfärbungen, Lücken und leichte Fehlstellungen perfekt ab.</li>
          <li><strong>Bonding (Kompositlaminat):</strong> Das Verfahren zur Korrektur kleinerer ästhetischer Mängel (kleine Frakturen, Lücken) mit zahnfarbenen Kompositmaterialien in einer einzigen Sitzung.</li>
          <li><strong>Zirkon- und E-max-Kronen:</strong> Diese metallfreien Kronen mit hoher Lichtdurchlässigkeit bieten sowohl Ästhetik als auch Haltbarkeit, indem sie das Aussehen natürlicher Zähne nachahmen.</li>
          <li><strong>Rosa Ästhetik (Zahnfleischästhetik):</strong> Das ideale Zahnfleischaussehen wird durch Verfahren wie die Anpassung des Zahnfleischniveaus erreicht.</li>
        </ul>
        <p>Ein selbstbewusstes Lächeln schafft einen positiven Einfluss in Ihrem sozialen und beruflichen Leben. Sie können unsere Klinik konsultieren, um die für Sie am besten geeignete ästhetische Lösung zu finden.</p>`
    },
    icon: React.createElement(SparklesIcon),
    imageUrl: 'https://i.imgur.com/0ILBoBD.jpg',
  },
  {
    id: 'dijital-dis-hekimligi',
    name: { tr: 'Yapay Zeka Destekli Dijital Diş Hekimliği', en: 'AI-Assisted Digital Dentistry', de: 'KI-gestützte digitale Zahnheilkunde' },
    description: {
      tr: 'Tedavilerde maksimum hassasiyet ve konfor sağlayan 3D tarayıcılar, CAD/CAM sistemleri ve yapay zeka teknolojileri.',
      en: '3D scanners, CAD/CAM systems, and artificial intelligence technologies that provide maximum precision and comfort in treatments.',
      de: '3D-Scanner, CAD/CAM-Systeme und künstliche Intelligenz-Technologien, die maximale Präzision und Komfort bei Behandlungen bieten.'
    },
    longDescription: {
      tr: `
        <p class="mb-4">Dijital diş hekimliği, teşhis ve tedavi süreçlerinde bilgisayar destekli teknolojilerin ve yapay zekanın kullanılmasıyla hata payını en aza indiren, hasta konforunu ve tedavi hızını ise en üst düzeye çıkaran modern bir yaklaşımdır.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Kliniğimizdeki Dijital Teknolojiler</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Ağız İçi Tarayıcılar (3D Scanners):</strong> Geleneksel ölçü alma yöntemlerinin neden olduğu bulantı refleksini ortadan kaldıran bu cihazlar, dişlerinizin üç boyutlu dijital modelini saniyeler içinde oluşturur. Bu sayede hassas ve hızlı bir ölçü alınır.</li>
          <li><strong>CAD/CAM Sistemleri (Cerec):</strong> Bilgisayar Destekli Tasarım ve Üretim sistemleri sayesinde porselen veya zirkonyum kaplama, inley ve onley dolgular gibi restorasyonlar tek seansta klinikte tasarlanıp üretilebilir. Bu, tedavi süresini önemli ölçüde kısaltır.</li>
          <li><strong>Yapay Zeka (AI) Destekli Teşhis:</strong> Yapay zeka algoritmaları, röntgen görüntülerindeki başlangıç seviyesindeki çürükleri veya diğer patolojileri insan gözünden daha hassas bir şekilde tespit ederek erken teşhise olanak tanır.</li>
          <li><strong>Dijital Gülüş Tasarımı:</strong> Tedaviye başlamadan önce, dijital ortamda yüzünüzün ve dişlerinizin analizini yaparak, tedavi sonrası gülüşünüzün nasıl görüneceğini size gösterebiliriz.</li>
        </ul>
        <p>Teknolojinin sunduğu bu imkanlarla, daha konforlu, daha hızlı ve daha öngörülebilir sonuçlar elde etmek mümkündür.</p>`,
      en: `
        <p class="mb-4">Digital dentistry is a modern approach that minimizes the margin of error and maximizes patient comfort and treatment speed by using computer-aided technologies and artificial intelligence in diagnosis and treatment processes.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Digital Technologies in Our Clinic</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Intraoral Scanners (3D Scanners):</strong> These devices, which eliminate the gag reflex caused by traditional impression-taking methods, create a three-dimensional digital model of your teeth in seconds. This allows for precise and fast impressions.</li>
          <li><strong>CAD/CAM Systems (Cerec):</strong> Thanks to Computer-Aided Design and Manufacturing systems, restorations such as porcelain or zirconium crowns, inlays, and onlays can be designed and produced in the clinic in a single session. This significantly shortens the treatment time.</li>
          <li><strong>AI-Assisted Diagnosis:</strong> Artificial intelligence algorithms enable early diagnosis by detecting initial-stage cavities or other pathologies in X-ray images more precisely than the human eye.</li>
          <li><strong>Digital Smile Design:</strong> Before starting treatment, we can show you how your smile will look after the treatment by analyzing your face and teeth in a digital environment.</li>
        </ul>
        <p>With these possibilities offered by technology, it is possible to achieve more comfortable, faster, and more predictable results.</p>`,
      de: `
        <p class="mb-4">Die digitale Zahnheilkunde ist ein moderner Ansatz, der den Fehlerbereich minimiert und den Patientenkomfort sowie die Behandlungsgeschwindigkeit maximiert, indem computergestützte Technologien und künstliche Intelligenz in Diagnose- und Behandlungsprozessen eingesetzt werden.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Digitale Technologien in unserer Klinik</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Intraorale Scanner (3D-Scanner):</strong> Diese Geräte, die den durch traditionelle Abformmethoden verursachten Würgereflex eliminieren, erstellen in Sekundenschnelle ein dreidimensionales digitales Modell Ihrer Zähne. Dies ermöglicht präzise und schnelle Abformungen.</li>
          <li><strong>CAD/CAM-Systeme (Cerec):</strong> Dank computergestützter Design- und Fertigungssysteme können Restaurationen wie Porzellan- oder Zirkoniumkronen, Inlays und Onlays in einer einzigen Sitzung in der Klinik entworfen und hergestellt werden. Dies verkürzt die Behandlungszeit erheblich.</li>
          <li><strong>KI-gestützte Diagnose:</strong> Algorithmen der künstlichen Intelligenz ermöglichen eine frühzeitige Diagnose, indem sie Karies im Anfangsstadium oder andere Pathologien in Röntgenbildern präziser als das menschliche Auge erkennen.</li>
          <li><strong>Digitales Lächel-Design:</strong> Vor Beginn der Behandlung können wir Ihnen zeigen, wie Ihr Lächeln nach der Behandlung aussehen wird, indem wir Ihr Gesicht und Ihre Zähne in einer digitalen Umgebung analysieren.</li>
        </ul>
        <p>Mit diesen technologischen Möglichkeiten ist es möglich, komfortablere, schnellere und vorhersagbarere Ergebnisse zu erzielen.</p>`
    },
    icon: React.createElement(DevicePhoneMobileIcon),
    imageUrl: 'https://i.imgur.com/ntrA30O.jpg',
  },
  {
    id: 'endodonti',
    name: { tr: 'Endodonti', en: 'Endodontics', de: 'Endodontie' },
    description: {
      tr: 'Ağrılı ve enfekte dişleri kurtarmak için uygulanan modern kanal tedavisi yöntemleriyle diş kaybını önlüyoruz.',
      en: 'We prevent tooth loss with modern root canal treatment methods applied to save painful and infected teeth.',
      de: 'Wir verhindern Zahnverlust mit modernen Wurzelkanalbehandlungsmethoden, die zur Rettung schmerzhafter und infizierter Zähne angewendet werden.'
    },
    longDescription: {
      tr: `
        <p class="mb-4">Endodonti, dişin pulpa (sinir ve damar dokusu) adı verilen iç kısmının hastalıkları ve yaralanmaları ile ilgilenir. Genellikle "kanal tedavisi" olarak bilinen bu işlem, derin çürükler, travmalar veya çatlaklar sonucu enfekte olmuş veya iltihaplanmış bir dişi kurtarmayı amaçlar.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Kanal Tedavisi Neden Gerekli Olur?</h3>
        <p class="mb-4">Dişin pulpası hasar gördüğünde, tedavi edilmezse enfeksiyon kök ucuna yayılarak çene kemiğinde apseye yol açabilir. Bu durum şiddetli ağrı, şişlik ve diş kaybıyla sonuçlanabilir. Kanal tedavisi, dişi çekilmekten kurtaran etkili bir yöntemdir.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Tedavi Süreci</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Ağrısız Tedavi:</strong> İşlem, lokal anestezi altında yapıldığı için tamamen ağrısızdır.</li>
            <li><strong>Enfeksiyonun Temizlenmesi:</strong> Enfekte pulpa dokusu özel aletlerle ve döner alet sistemleri kullanılarak temizlenir, kanallar dezenfekte edilir.</li>
            <li><strong>Kanalların Doldurulması:</strong> Temizlenen kanallar, biyouyumlu dolgu materyalleri ile sızdırmaz bir şekilde doldurulur.</li>
            <li><strong>Restorasyon:</strong> Tedavi sonrası dişin dayanıklılığını artırmak için genellikle dolgu veya kuron (kaplama) ile restore edilir.</li>
        </ul>
        <p>Kliniğimizde, modern endodontik cihazlar (döner alet sistemleri, apex locator) ve yöntemler kullanarak kanal tedavisi işlemlerini tek seansta, konforlu ve başarılı bir şekilde gerçekleştiriyoruz.</p>`,
      en: `
        <p class="mb-4">Endodontics deals with diseases and injuries of the inner part of the tooth called the pulp (nerve and vessel tissue). Commonly known as "root canal treatment," this procedure aims to save a tooth that has become infected or inflamed due to deep decay, trauma, or cracks.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Why is Root Canal Treatment Necessary?</h3>
        <p class="mb-4">When the tooth's pulp is damaged, if left untreated, the infection can spread to the root tip, leading to an abscess in the jawbone. This can result in severe pain, swelling, and tooth loss. Root canal treatment is an effective method to save the tooth from extraction.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">The Treatment Process</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Painless Treatment:</strong> The procedure is completely painless as it is performed under local anesthesia.</li>
            <li><strong>Cleaning the Infection:</strong> The infected pulp tissue is cleaned using special instruments and rotary tool systems, and the canals are disinfected.</li>
            <li><strong>Filling the Canals:</strong> The cleaned canals are hermetically sealed with biocompatible filling materials.</li>
            <li><strong>Restoration:</strong> After treatment, the tooth is usually restored with a filling or crown to increase its durability.</li>
        </ul>
        <p>At our clinic, we perform root canal treatments in a single session, comfortably and successfully, using modern endodontic devices (rotary systems, apex locator) and methods.</p>`,
      de: `
        <p class="mb-4">Die Endodontie befasst sich mit Erkrankungen und Verletzungen des inneren Teils des Zahnes, der Pulpa (Nerven- und Gefäßgewebe) genannt wird. Dieses Verfahren, allgemein als "Wurzelkanalbehandlung" bekannt, zielt darauf ab, einen Zahn zu retten, der durch tiefe Karies, Traumata oder Risse infiziert oder entzündet ist.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Warum ist eine Wurzelkanalbehandlung notwendig?</h3>
        <p class="mb-4">Wenn die Pulpa des Zahnes beschädigt ist und unbehandelt bleibt, kann sich die Infektion bis zur Wurzelspitze ausbreiten und zu einem Abszess im Kieferknochen führen. Dies kann zu starken Schmerzen, Schwellungen und Zahnverlust führen. Die Wurzelkanalbehandlung ist eine wirksame Methode, um den Zahn vor der Extraktion zu bewahren.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Der Behandlungsprozess</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
            <li><strong>Schmerzfreie Behandlung:</strong> Der Eingriff ist völlig schmerzfrei, da er unter örtlicher Betäubung durchgeführt wird.</li>
            <li><strong>Reinigung der Infektion:</strong> Das infizierte Pulpagewebe wird mit speziellen Instrumenten und rotierenden Instrumentensystemen gereinigt und die Kanäle werden desinfiziert.</li>
            <li><strong>Füllen der Kanäle:</strong> Die gereinigten Kanäle werden mit biokompatiblen Füllmaterialien hermetisch verschlossen.</li>
            <li><strong>Restauration:</strong> Nach der Behandlung wird der Zahn in der Regel mit einer Füllung oder Krone restauriert, um seine Haltbarkeit zu erhöhen.</li>
        </ul>
        <p>In unserer Klinik führen wir Wurzelkanalbehandlungen in einer einzigen Sitzung komfortabel und erfolgreich durch, unter Verwendung moderner endodontischer Geräte (Rotationssysteme, Apex-Locator) und Methoden.</p>`
    },
    icon: React.createElement(ToothIcon),
    imageUrl: 'https://i.imgur.com/d2oX1kv.jpg',
  },
  {
    id: 'ortodonti',
    name: { tr: 'Ortodonti', en: 'Orthodontics', de: 'Kieferorthopädie' },
    description: {
      tr: 'Her yaş için uygun, metal braketler veya modern şeffaf plaklar (Invisalign) ile diş çapraşıklıklarına estetik ve fonksiyonel çözümler.',
      en: 'Aesthetic and functional solutions for crooked teeth with metal braces or modern clear aligners (Invisalign), suitable for all ages.',
      de: 'Ästhetische und funktionelle Lösungen für schiefe Zähne mit Metallbrackets oder modernen transparenten Alignern (Invisalign), geeignet für jedes Alter.'
    },
    longDescription: {
      tr: `
        <p class="mb-4">Ortodonti, dişlerdeki ve çenelerdeki uyumsuzlukları ve çapraşıklıkları teşhis eden, önleyen ve tedavi eden diş hekimliği dalıdır. Düzgün sıralanmış dişler sadece estetik bir gülüş sağlamakla kalmaz, aynı zamanda çiğneme fonksiyonunu iyileştirir ve dişlerin daha kolay temizlenmesine olanak tanıyarak çürük ve diş eti hastalıkları riskini azaltır.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Ortodontik Tedavi Seçenekleri</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Metal Braketler (Diş Teli):</strong> En yaygın kullanılan ve özellikle karmaşık vakalarda oldukça etkili olan geleneksel yöntemdir.</li>
          <li><strong>Şeffaf (Porselen) Braketler:</strong> Metal braketlerle aynı prensipte çalışır ancak diş renginde oldukları için daha az fark edilirler ve estetik bir alternatif sunarlar.</li>
          <li><strong>Şeffaf Plaklar (Invisalign):</strong> Neredeyse görünmez olan, kişiye özel üretilmiş, takılıp çıkarılabilir plak serileridir. Özellikle yetişkin hastalar tarafından estetik ve konforlu olmaları nedeniyle sıkça tercih edilir.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Tedavi Kimler İçin Uygundur?</h3>
        <p class="mb-4">Ortodontik tedavi için yaş sınırı yoktur. Çocuklarda çene gelişimini yönlendirmek ve ileride oluşabilecek ciddi sorunları önlemek için erken yaşta (7-8 yaş) kontrol önemlidir. Yetişkinlerde ise estetik ve fonksiyonel sorunları gidermek için her yaşta tedavi uygulanabilir.</p>
        <p>Size en uygun ortodontik tedavi yöntemini belirlemek için uzman hekimlerimizle görüşebilirsiniz.</p>`,
      en: `
        <p class="mb-4">Orthodontics is the branch of dentistry that diagnoses, prevents, and treats misalignments and crookedness in teeth and jaws. Properly aligned teeth not only provide an aesthetic smile but also improve chewing function and reduce the risk of cavities and gum disease by allowing for easier cleaning.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Orthodontic Treatment Options</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Metal Braces:</strong> The most commonly used and highly effective traditional method, especially in complex cases.</li>
          <li><strong>Clear (Porcelain) Braces:</strong> They work on the same principle as metal braces but are less noticeable as they are tooth-colored, offering an aesthetic alternative.</li>
          <li><strong>Clear Aligners (Invisalign):</strong> A series of custom-made, removable, nearly invisible aligners. They are often preferred by adult patients for their aesthetic and comfortable nature.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Who is the Treatment Suitable For?</h3>
        <p class="mb-4">There is no age limit for orthodontic treatment. For children, an early check-up (ages 7-8) is important to guide jaw development and prevent serious problems that may arise in the future. In adults, treatment can be applied at any age to correct aesthetic and functional problems.</p>
        <p>You can consult with our specialist dentists to determine the most suitable orthodontic treatment method for you.</p>`,
      de: `
        <p class="mb-4">Die Kieferorthopädie ist der Zweig der Zahnmedizin, der Fehlstellungen und Schiefstände von Zähnen und Kiefern diagnostiziert, verhindert und behandelt. Richtig ausgerichtete Zähne sorgen nicht nur für ein ästhetisches Lächeln, sondern verbessern auch die Kaufunktion und verringern das Risiko von Karies und Zahnfleischerkrankungen, da sie leichter zu reinigen sind.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Kieferorthopädische Behandlungsoptionen</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Metallbrackets:</strong> Die am häufigsten verwendete und hochwirksame traditionelle Methode, insbesondere in komplexen Fällen.</li>
          <li><strong>Transparente (Porzellan-)Brackets:</strong> Sie funktionieren nach dem gleichen Prinzip wie Metallbrackets, sind aber weniger auffällig, da sie zahnfarben sind und eine ästhetische Alternative bieten.</li>
          <li><strong>Transparente Aligner (Invisalign):</strong> Eine Serie von maßgefertigten, herausnehmbaren, fast unsichtbaren Alignern. Sie werden oft von erwachsenen Patienten wegen ihrer Ästhetik und ihres Komforts bevorzugt.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Für wen ist die Behandlung geeignet?</h3>
        <p class="mb-4">Es gibt keine Altersgrenze für eine kieferorthopädische Behandlung. Bei Kindern ist eine frühe Kontrolle (im Alter von 7-8 Jahren) wichtig, um die Kieferentwicklung zu lenken und ernsthafte Probleme in der Zukunft zu vermeiden. Bei Erwachsenen kann die Behandlung in jedem Alter angewendet werden, um ästhetische und funktionelle Probleme zu korrigieren.</p>
        <p>Sie können sich mit unseren Fachzahnärzten beraten, um die für Sie am besten geeignete kieferorthopädische Behandlungsmethode zu bestimmen.</p>`
    },
    icon: React.createElement(AdjustmentsHorizontalIcon),
    imageUrl: 'https://i.imgur.com/VdmUiHs.jpg',
  },
  {
    id: 'dis-beyazlatma',
    name: { tr: 'Diş Beyazlatma', en: 'Teeth Whitening', de: 'Zahnaufhellung' },
    description: {
      tr: 'Daha parlak ve çekici bir gülüş için ofis tipi (klinikte) veya ev tipi profesyonel diş beyazlatma çözümleri.',
      en: 'Office-type (in-clinic) or home-type professional teeth whitening solutions for a brighter and more attractive smile.',
      de: 'Professionelle Zahnaufhellungslösungen für ein strahlenderes und attraktiveres Lächeln, entweder in der Praxis oder zu Hause.'
    },
    longDescription: {
      tr: `
        <p class="mb-4">Diş beyazlatma (bleaching), dişlerin yüzeyindeki gözenekli mine yapısında oluşan renklenmeleri gidererek dişlerin rengini birkaç ton açma işlemidir. Zamanla tüketilen çay, kahve, sigara gibi ürünlerin neden olduğu sararmaları ortadan kaldırarak daha estetik ve genç bir gülüş sağlar.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Beyazlatma Yöntemleri</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Ofis Tipi Beyazlatma (Office Bleaching):</strong> Klinik ortamında, diş hekimi tarafından uygulanan en hızlı ve etkili yöntemdir. Yüksek konsentrasyonlu beyazlatma jeli dişlere uygulanır ve özel bir ışık kaynağı ile aktive edilerek yaklaşık 1 saat içinde sonuç alınır.</li>
          <li><strong>Ev Tipi Beyazlatma (Home Bleaching):</strong> Hekiminizin aldığı ölçüye göre size özel hazırlanan şeffaf plaklar ve daha düşük konsentrasyonlu beyazlatma jelleri ile evde uygulanan bir yöntemdir. Plaklar, hekiminizin önerdiği sürelerde (genellikle günde 4-6 saat) 1-2 hafta boyunca takılır.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Önemli Bilgiler</h3>
        <p class="mb-4">Beyazlatma işlemi öncesinde ağız ve diş sağlığınızın tam olması gerekir. Çürükler ve diş eti hastalıkları tedavi edilmelidir. İşlem, mevcut dolgu ve kaplamaların rengini etkilemez. Tedavi sonrası ilk birkaç gün hafif bir hassasiyet yaşanabilir ve renklendirici gıdalardan kaçınılması önerilir.</p>
        <p>Hangi yöntemin sizin için uygun olduğunu belirlemek ve güvenli bir beyazlatma işlemi için diş hekiminize danışın.</p>`,
      en: `
        <p class="mb-4">Teeth whitening (bleaching) is the process of lightening the color of teeth by several shades by removing stains formed in the porous enamel structure on the tooth surface. It provides a more aesthetic and youthful smile by eliminating the yellowing caused by products like tea, coffee, and cigarettes consumed over time.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Whitening Methods</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Office Bleaching:</strong> The fastest and most effective method applied by a dentist in a clinical setting. A high-concentration whitening gel is applied to the teeth and activated with a special light source, achieving results in about 1 hour.</li>
          <li><strong>Home Bleaching:</strong> A method applied at home with custom-made transparent trays prepared according to the impression taken by your dentist and lower-concentration whitening gels. The trays are worn for the periods recommended by your dentist (usually 4-6 hours a day) for 1-2 weeks.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Important Information</h3>
        <p class="mb-4">Your oral and dental health must be complete before the whitening procedure. Cavities and gum diseases must be treated. The procedure does not affect the color of existing fillings and crowns. Mild sensitivity may be experienced for the first few days after the treatment, and it is recommended to avoid staining foods.</p>
        <p>Consult your dentist to determine which method is suitable for you and for a safe whitening procedure.</p>`,
      de: `
        <p class="mb-4">Die Zahnaufhellung (Bleaching) ist der Prozess, bei dem die Zahnfarbe um mehrere Nuancen aufgehellt wird, indem Verfärbungen in der porösen Schmelzstruktur auf der Zahnoberfläche entfernt werden. Es sorgt für ein ästhetischeres und jugendlicheres Lächeln, indem es die durch Produkte wie Tee, Kaffee und Zigaretten im Laufe der Zeit verursachte Vergilbung beseitigt.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Aufhellungsmethoden</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Office-Bleaching:</strong> Die schnellste und effektivste Methode, die von einem Zahnarzt in einer klinischen Umgebung angewendet wird. Ein hochkonzentriertes Aufhellungsgel wird auf die Zähne aufgetragen und mit einer speziellen Lichtquelle aktiviert, wodurch Ergebnisse in etwa 1 Stunde erzielt werden.</li>
          <li><strong>Home-Bleaching:</strong> Eine Methode, die zu Hause mit maßgefertigten transparenten Schienen angewendet wird, die nach dem von Ihrem Zahnarzt genommenen Abdruck und Aufhellungsgelen mit geringerer Konzentration hergestellt werden. Die Schienen werden für die von Ihrem Zahnarzt empfohlenen Zeiträume (normalerweise 4-6 Stunden pro Tag) für 1-2 Wochen getragen.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Wichtige Informationen</h3>
        <p class="mb-4">Ihre Mund- und Zahngesundheit muss vor dem Aufhellungsverfahren vollständig sein. Karies und Zahnfleischerkrankungen müssen behandelt werden. Das Verfahren beeinflusst nicht die Farbe vorhandener Füllungen und Kronen. In den ersten Tagen nach der Behandlung kann eine leichte Empfindlichkeit auftreten, und es wird empfohlen, färbende Lebensmittel zu meiden.</p>
        <p>Konsultieren Sie Ihren Zahnarzt, um festzustellen, welche Methode für Sie geeignet ist und für ein sicheres Aufhellungsverfahren.</p>`
    },
    icon: React.createElement(SparklesIcon),
    imageUrl: 'https://i.imgur.com/MqdNGFw.jpg',
  },
  {
    id: 'cerrahi-dis-cekimi',
    name: { tr: 'Cerrahi Diş Çekimi', en: 'Surgical Tooth Extraction', de: 'Chirurgische Zahnextraktion' },
    description: {
      tr: 'Gömülü 20 yaş dişleri ve kurtarılamayacak durumdaki dişler için ağrısız ve güvenli cerrahi çekim işlemleri.',
      en: 'Painless and safe surgical extraction procedures for impacted wisdom teeth and teeth that cannot be saved.',
      de: 'Schmerzlose und sichere chirurgische Extraktionsverfahren für impaktierte Weisheitszähne und nicht erhaltungswürdige Zähne.'
    },
    longDescription: {
      tr: `
        <p class="mb-4">Cerrahi diş çekimi, basit bir çekimle alınamayan, yani diş etinin altında veya çene kemiği içinde kalmış (gömülü) dişlerin veya kökleri komplike olan dişlerin alınması işlemidir. En sık olarak 20 yaş dişleri (akıl dişleri) için uygulanır.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Ne Zaman Gerekir?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Gömülü Dişler:</strong> Çenede yeterli yer olmaması nedeniyle tam olarak sürememiş dişler. Bu dişler ağrıya, enfeksiyona (perikoronit), komşu dişlerde çürüğe veya baskıya neden olabilir.</li>
          <li><strong>Kök Kırıkları:</strong> Travma veya çürük nedeniyle dişin görünen kısmı (kuron) kırılmış ancak kökleri kemik içinde kalmışsa.</li>
          <li><strong>Kist veya Tümör Varlığı:</strong> Diş kökü etrafında oluşan patolojik oluşumlarla birlikte dişin alınması gerektiğinde.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">İşlem Nasıl Yapılır?</h3>
        <p class="mb-4">İşlem lokal anestezi altında yapıldığı için tamamen ağrısızdır. Cerrah, diş etinde küçük bir kesi yaparak dişe veya köke ulaşır. Gerekirse dişin etrafındaki kemikten bir miktar kaldırabilir veya dişi birkaç parçaya ayırarak daha kolay çıkarabilir. İşlem sonrası bölge dikişlerle kapatılır ve dikişler genellikle bir hafta sonra alınır.</p>
        <p>İyileşme sürecinin sorunsuz geçmesi için hekiminizin çekim sonrası talimatlarına uymanız çok önemlidir.</p>`,
      en: `
        <p class="mb-4">Surgical tooth extraction is the removal of teeth that cannot be removed with a simple extraction, i.e., teeth that are impacted under the gum or within the jawbone, or teeth with complicated roots. It is most commonly performed for wisdom teeth.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">When is it Necessary?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Impacted Teeth:</strong> Teeth that have not fully erupted due to lack of space in the jaw. These teeth can cause pain, infection (pericoronitis), decay, or pressure on adjacent teeth.</li>
          <li><strong>Root Fractures:</strong> If the visible part of the tooth (crown) is broken due to trauma or decay, but the roots remain in the bone.</li>
          <li><strong>Presence of Cysts or Tumors:</strong> When the tooth needs to be removed along with pathological formations around the tooth root.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">How is the Procedure Done?</h3>
        <p class="mb-4">The procedure is completely painless as it is performed under local anesthesia. The surgeon makes a small incision in the gum to access the tooth or root. If necessary, a small amount of bone around the tooth may be removed, or the tooth may be sectioned into several pieces for easier removal. After the procedure, the area is closed with stitches, which are usually removed a week later.</p>
        <p>It is very important to follow your dentist's post-extraction instructions for a smooth recovery process.</p>`,
      de: `
        <p class="mb-4">Die chirurgische Zahnextraktion ist die Entfernung von Zähnen, die nicht mit einer einfachen Extraktion entfernt werden können, d.h. Zähne, die unter dem Zahnfleisch oder im Kieferknochen impaktiert sind, oder Zähne mit komplizierten Wurzeln. Sie wird am häufigsten bei Weisheitszähnen durchgeführt.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Wann ist es notwendig?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Impaktierte Zähne:</strong> Zähne, die aufgrund von Platzmangel im Kiefer nicht vollständig durchgebrochen sind. Diese Zähne können Schmerzen, Infektionen (Perikoronitis), Karies oder Druck auf benachbarte Zähne verursachen.</li>
          <li><strong>Wurzelfrakturen:</strong> Wenn der sichtbare Teil des Zahnes (Krone) aufgrund eines Traumas oder Karies gebrochen ist, aber die Wurzeln im Knochen verbleiben.</li>
          <li><strong>Vorhandensein von Zysten oder Tumoren:</strong> Wenn der Zahn zusammen mit pathologischen Formationen um die Zahnwurzel entfernt werden muss.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Wie wird der Eingriff durchgeführt?</h3>
        <p class="mb-4">Der Eingriff ist völlig schmerzfrei, da er unter örtlicher Betäubung durchgeführt wird. Der Chirurg macht einen kleinen Schnitt im Zahnfleisch, um Zugang zum Zahn oder zur Wurzel zu erhalten. Bei Bedarf kann eine kleine Menge Knochen um den Zahn entfernt werden, oder der Zahn kann zur leichteren Entfernung in mehrere Teile zerlegt werden. Nach dem Eingriff wird der Bereich mit Nähten verschlossen, die in der Regel eine Woche später entfernt werden.</p>
        <p>Es ist sehr wichtig, die Anweisungen Ihres Zahnarztes nach der Extraktion zu befolgen, um einen reibungslosen Genesungsprozess zu gewährleisten.</p>`
    },
    icon: React.createElement(ToothIcon),
    imageUrl: 'https://i.imgur.com/qZQZ3yr.jpg',
  },
  {
    id: 'protezler',
    name: { tr: 'Protezler', en: 'Prosthetics', de: 'Prothetik' },
    description: {
      tr: 'Sabit (kuron-köprü) ve hareketli (damak) protezlerle kaybedilen dişlerin fonksiyon ve estetiğini geri kazanın.',
      en: 'Regain the function and aesthetics of lost teeth with fixed (crown-bridge) and removable (denture) prosthetics.',
      de: 'Gewinnen Sie die Funktion und Ästhetik verlorener Zähne mit festsitzenden (Kronen-Brücken) und herausnehmbaren (Prothesen) Prothetiken zurück.'
    },
    longDescription: {
      tr: `
        <p class="mb-4">Protetik diş tedavisi, çeşitli nedenlerle kaybedilmiş dişlerin veya çevre dokuların yerine yapay materyallerle yenilerinin konulmasıdır. Amaç, hastanın kaybettiği çiğneme fonksiyonunu, konuşma yeteneğini ve estetik görünümünü geri kazandırmaktır.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Sabit Protezler</h3>
        <p class="mb-4">Hastanın takıp çıkaramadığı, dişlere yapıştırılarak sabitlenen protezlerdir.</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Kuron (Kaplama):</strong> Aşırı madde kaybı olan veya kanal tedavisi görmüş dişleri korumak ve estetiğini düzeltmek için dişin üzerinin tamamen kaplanmasıdır. Zirkonyum veya porselen gibi materyallerden yapılabilir.</li>
          <li><strong>Köprü:</strong> Bir veya daha fazla diş eksikliğinde, komşu dişlerden destek alınarak aradaki boşluğun doldurulmasıdır. Komşu dişler küçültülerek üzerlerine birleşik bir kaplama yapılır.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Hareketli Protezler</h3>
        <p class="mb-4">Hastanın kendisinin takıp çıkarabildiği, genellikle çok sayıda diş eksikliğinde veya tüm dişlerin eksikliğinde uygulanan protezlerdir.</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Total Protezler (Damak):</strong> Ağızda hiç diş kalmadığında, alt ve üst çeneye oturan tam protezlerdir.</li>
          <li><strong>Parsiyel (Bölümlü) Protezler:</strong> Ağızdaki mevcut dişlerden kancalar veya hassas tutucularla destek alan, eksik dişlerin yerini dolduran protezlerdir.</li>
          <li><strong>İmplant Üstü Protezler:</strong> Çene kemiğine yerleştirilen implantlardan destek alan, hem sabit hem de hareketli olabilen, geleneksel protezlere göre çok daha stabil ve konforlu protezlerdir.</li>
        </ul>
        <p>Ağız yapınıza ve ihtiyaçlarınıza en uygun protez çözümünü belirlemek için diş hekimlerimizle görüşebilirsiniz.</p>`,
      en: `
        <p class="mb-4">Prosthetic dentistry is the replacement of teeth or surrounding tissues lost for various reasons with artificial materials. The goal is to restore the patient's lost chewing function, speaking ability, and aesthetic appearance.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Fixed Prosthetics</h3>
        <p class="mb-4">These are prosthetics that are fixed by being cemented to the teeth and cannot be removed by the patient.</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Crown:</strong> The complete covering of a tooth to protect teeth with excessive substance loss or that have undergone root canal treatment and to correct their aesthetics. It can be made from materials like zirconium or porcelain.</li>
          <li><strong>Bridge:</strong> The filling of the gap in the case of one or more missing teeth by taking support from adjacent teeth. The adjacent teeth are reduced and a combined crown is placed on them.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Removable Prosthetics</h3>
        <p class="mb-4">These are prosthetics that the patient can insert and remove themselves, usually applied in cases of numerous missing teeth or total tooth loss.</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Total Dentures:</strong> Full dentures that sit on the lower and upper jaws when no teeth are left in the mouth.</li>
          <li><strong>Partial Dentures:</strong> Prosthetics that fill the place of missing teeth, supported by existing teeth in the mouth with clasps or precision attachments.</li>
          <li><strong>Implant-Supported Prosthetics:</strong> Supported by implants placed in the jawbone, these can be either fixed or removable and are much more stable and comfortable than traditional prosthetics.</li>
        </ul>
        <p>You can consult with our dentists to determine the most suitable prosthetic solution for your oral structure and needs.</p>`,
      de: `
        <p class="mb-4">Die prothetische Zahnheilkunde ist der Ersatz von Zähnen oder umgebendem Gewebe, das aus verschiedenen Gründen verloren gegangen ist, durch künstliche Materialien. Ziel ist es, die verlorene Kaufunktion, Sprechfähigkeit und das ästhetische Erscheinungsbild des Patienten wiederherzustellen.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Festsitzende Prothetik</h3>
        <p class="mb-4">Dies sind Prothesen, die durch Zementieren an den Zähnen befestigt werden und vom Patienten nicht entfernt werden können.</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Krone:</strong> Die vollständige Überkronung eines Zahnes zum Schutz von Zähnen mit übermäßigem Substanzverlust oder nach einer Wurzelkanalbehandlung und zur Korrektur ihrer Ästhetik. Sie kann aus Materialien wie Zirkon oder Porzellan hergestellt werden.</li>
          <li><strong>Brücke:</strong> Das Schließen der Lücke bei einem oder mehreren fehlenden Zähnen durch Unterstützung von Nachbarzähnen. Die Nachbarzähne werden beschliffen und eine kombinierte Krone darauf gesetzt.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Herausnehmbare Prothetik</h3>
        <p class="mb-4">Dies sind Prothesen, die der Patient selbst einsetzen und herausnehmen kann und die in der Regel bei zahlreichen fehlenden Zähnen oder totalem Zahnverlust angewendet werden.</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Totalprothesen:</strong> Vollprothesen, die auf dem Unter- und Oberkiefer sitzen, wenn keine Zähne mehr im Mund vorhanden sind.</li>
          <li><strong>Teilprothesen:</strong> Prothesen, die den Platz fehlender Zähne füllen und von den vorhandenen Zähnen im Mund mit Klammern oder Präzisionsgeschieben gestützt werden.</li>
          <li><strong>Implantatgetragene Prothesen:</strong> Gestützt von im Kieferknochen platzierten Implantaten, können diese sowohl festsitzend als auch herausnehmbar sein und sind viel stabiler und komfortabler als herkömmliche Prothesen.</li>
        </ul>
        <p>Sie können sich mit unseren Zahnärzten beraten, um die für Ihre Mundstruktur und Bedürfnisse am besten geeignete prothetische Lösung zu finden.</p>`
    },
    icon: React.createElement(PuzzlePieceIcon),
    imageUrl: 'https://i.imgur.com/xySkpAr.jpg',
  },
  {
    id: 'pedodonti',
    name: { tr: 'Pedodonti / Çocuk Hasta Tedavileri', en: 'Pedodontics / Pediatric Dentistry', de: 'Pädodontie / Kinderzahnheilkunde' },
    description: {
      tr: 'Bebeklikten ergenliğe kadar çocukların ağız ve diş sağlığını koruyan, onlara diş hekimi sevgisini aşılayan özel yaklaşımlar.',
      en: 'Special approaches that protect the oral and dental health of children from infancy to adolescence and instill a love for the dentist.',
      de: 'Spezielle Ansätze, die die Mund- und Zahngesundheit von Kindern vom Säuglings- bis zum Jugendalter schützen und ihnen die Liebe zum Zahnarzt vermitteln.'
    },
    longDescription: {
      tr: `
        <p class="mb-4">Pedodonti (Çocuk Diş Hekimliği), 0-14 yaş arası çocukların süt ve daimi dişlerinin sağlığını korumayı ve tedavi etmeyi amaçlayan diş hekimliği dalıdır. Bu süreç sadece tedavi değil, aynı zamanda çocuğun diş hekimi korkusu olmadan, ağız bakımını bir alışkanlık haline getirmesini sağlamayı da hedefler.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Çocuk Diş Hekimliğinde Sunduğumuz Hizmetler</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Koruyucu Tedaviler:</strong>
            <ul class="list-[circle] list-inside ml-4">
              <li><strong>Fissür Örtücüler:</strong> Azı dişlerinin çiğneme yüzeylerindeki girintileri kapatarak çürük oluşumunu engeller.</li>
              <li><strong>Florür Uygulamaları:</strong> Diş minesini güçlendirerek çürüklere karşı direncini artırır.</li>
            </ul>
          </li>
          <li><strong>Süt Dişi Tedavileri:</strong> Süt dişlerindeki çürüklerin tedavisi, alttan gelecek daimi dişin sağlığı ve yerinin korunması için çok önemlidir. Bu amaçla süt dişi dolguları ve kanal tedavileri yapılır.</li>
          <li><strong>Yer Tutucular:</strong> Erken kaybedilen bir süt dişinin yerini, alttan gelecek daimi diş sürene kadar koruyan apareylerdir.</li>
          <li><strong>Travma Tedavileri:</strong> Düşme, çarpma gibi nedenlerle oluşan diş kırıkları ve yaralanmaların tedavisi.</li>
          <li><strong>Ağız Hijyeni Eğitimi:</strong> Hem çocuğa hem de ebeveynlere doğru fırçalama ve beslenme alışkanlıkları hakkında bilgi verilir.</li>
        </ul>
        <p>Çocuğunuzun ilk diş hekimi deneyiminin pozitif olması, ömür boyu sürecek sağlıklı bir gülüşün temelini atar. Kliniğimizde, çocukların kendilerini rahat ve güvende hissedecekleri bir ortam sunuyoruz.</p>`,
      en: `
        <p class="mb-4">Pedodontics (Pediatric Dentistry) is the branch of dentistry that aims to protect and treat the health of primary and permanent teeth of children aged 0-14. This process is not only about treatment but also aims to ensure that the child develops oral care as a habit without fear of the dentist.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Services We Offer in Pediatric Dentistry</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Preventive Treatments:</strong>
            <ul class="list-[circle] list-inside ml-4">
              <li><strong>Fissure Sealants:</strong> Prevents cavity formation by covering the grooves on the chewing surfaces of molars.</li>
              <li><strong>Fluoride Applications:</strong> Strengthens tooth enamel and increases its resistance to cavities.</li>
            </ul>
          </li>
          <li><strong>Primary Tooth Treatments:</strong> Treating cavities in primary teeth is very important for the health of the underlying permanent tooth and for preserving its space. For this purpose, primary tooth fillings and root canal treatments are performed.</li>
          <li><strong>Space Maintainers:</strong> These are appliances that preserve the space of a prematurely lost primary tooth until the permanent tooth underneath erupts.</li>
          <li><strong>Trauma Treatments:</strong> Treatment of tooth fractures and injuries caused by falls, impacts, etc.</li>
          <li><strong>Oral Hygiene Education:</strong> Both the child and the parents are given information about proper brushing and nutritional habits.</li>
        </ul>
        <p>A positive first dental experience for your child lays the foundation for a lifelong healthy smile. At our clinic, we provide an environment where children feel comfortable and safe.</p>`,
      de: `
        <p class="mb-4">Die Pädodontie (Kinderzahnheilkunde) ist der Zweig der Zahnmedizin, der darauf abzielt, die Gesundheit der Milch- und bleibenden Zähne von Kindern im Alter von 0-14 Jahren zu schützen und zu behandeln. Dieser Prozess befasst sich nicht nur mit der Behandlung, sondern zielt auch darauf ab, sicherzustellen, dass das Kind die Mundpflege als Gewohnheit entwickelt, ohne Angst vor dem Zahnarzt zu haben.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Dienstleistungen in der Kinderzahnheilkunde</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Präventive Behandlungen:</strong>
            <ul class="list-[circle] list-inside ml-4">
              <li><strong>Fissurenversiegelung:</strong> Verhindert die Bildung von Karies, indem die Rillen auf den Kauflächen der Backenzähne abgedeckt werden.</li>
              <li><strong>Fluoridanwendungen:</strong> Stärkt den Zahnschmelz und erhöht seine Widerstandsfähigkeit gegen Karies.</li>
            </ul>
          </li>
          <li><strong>Milchzahnbehandlungen:</strong> Die Behandlung von Karies in Milchzähnen ist sehr wichtig für die Gesundheit des darunter liegenden bleibenden Zahnes und zur Erhaltung seines Platzes. Zu diesem Zweck werden Milchzahnfüllungen und Wurzelkanalbehandlungen durchgeführt.</li>
          <li><strong>Platzhalter:</strong> Dies sind Geräte, die den Platz eines vorzeitig verlorenen Milchzahnes erhalten, bis der bleibende Zahn darunter durchbricht.</li>
          <li><strong>Traumabehandlungen:</strong> Behandlung von Zahnfrakturen und Verletzungen durch Stürze, Stöße usw.</li>
          <li><strong>Mundhygieneerziehung:</strong> Sowohl das Kind als auch die Eltern erhalten Informationen über richtige Putz- und Ernährungsgewohnheiten.</li>
        </ul>
        <p>Eine positive erste zahnärztliche Erfahrung für Ihr Kind legt den Grundstein für ein lebenslanges gesundes Lächeln. In unserer Klinik bieten wir eine Umgebung, in der sich Kinder wohl und sicher fühlen.</p>`
    },
    icon: React.createElement(UserGroupIcon),
    imageUrl: 'https://i.imgur.com/B1b9kjm.jpg',
  },
  {
    id: 'engelli-birey-tedavileri',
    name: { tr: 'Engelli Bireyler İçin Diş Tedavileri', en: 'Dental Treatments for Individuals with Disabilities', de: 'Zahnbehandlungen für Menschen mit Behinderungen' },
    description: {
      tr: 'Özel ilgi gerektiren hastalarımız için sedasyon veya genel anestezi altında, güvenli ve konforlu tedavi imkanları.',
      en: 'Safe and comfortable treatment options under sedation or general anesthesia for our patients who require special care.',
      de: 'Sichere und komfortable Behandlungsoptionen unter Sedierung oder Vollnarkose für unsere Patienten, die besondere Betreuung benötigen.'
    },
    longDescription: {
      tr: `
        <p class="mb-4">Fiziksel veya zihinsel engeli olan, özel ilgi gerektiren bireylerin ağız ve diş sağlığı tedavileri, özel bir yaklaşım ve donanım gerektirir. Kliniğimiz, bu hastalarımızın ihtiyaçlarını anlayarak onlara en güvenli ve en konforlu tedavi ortamını sunmayı hedefler.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Özel Yaklaşımımız</h3>
        <p class="mb-4">Standart klinik koşullarında iletişim kurmakta veya koltukta hareketsiz kalmakta zorlanan hastalarımız için özel çözümler sunuyoruz:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Sedasyon (Bilinçli Sakinleştirme):</strong> Hastanın bilinci açıkken, kaygısını ve stresini azaltan ilaçlarla sakinleştirilmesidir. Bu yöntemle hasta rahatlar ve tedaviye daha uyumlu hale gelir.</li>
          <li><strong>Genel Anestezi:</strong> Özellikle ileri derecede fiziksel veya zihinsel engeli olan, koopere olamayan hastalarımız için tüm diş tedavilerinin (dolgu, kanal tedavisi, diş çekimi, diş temizliği) tek bir seansta, anestezi uzmanı kontrolünde tam donanımlı bir ameliyathane ortamında uyutularak yapılmasıdır. Bu yöntem, hem hasta hem de hekim için tedavi sürecini güvenli ve verimli hale getirir.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Kimler İçin Uygundur?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Zihinsel veya fiziksel engeli olan bireyler.</li>
          <li>İleri derecede diş hekimi korkusu (dentofobi) olan hastalar.</li>
          <li>Kooperasyon kurulamayan çocuklar.</li>
          <li>Bulantı refleksi aşırı olan hastalar.</li>
        </ul>
        <p>Hastamızın ve ailesinin konforu ve güvenliği bizim için önceliktir. Tedavi süreci hakkında detaylı bilgi almak ve en uygun yöntemi belirlemek için bizimle iletişime geçebilirsiniz.</p>`,
      en: `
        <p class="mb-4">Oral and dental health treatments for individuals with physical or mental disabilities who require special care necessitate a special approach and equipment. Our clinic aims to provide these patients with the safest and most comfortable treatment environment by understanding their needs.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Our Special Approach</h3>
        <p class="mb-4">We offer special solutions for our patients who have difficulty communicating or staying still in the chair under standard clinical conditions:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Sedation (Conscious Sedation):</strong> The patient is calmed with medications that reduce anxiety and stress while remaining conscious. With this method, the patient relaxes and becomes more compliant with the treatment.</li>
          <li><strong>General Anesthesia:</strong> Especially for our uncooperative patients with severe physical or mental disabilities, all dental treatments (fillings, root canals, extractions, cleaning) are performed in a single session under the control of an anesthesiologist in a fully equipped operating room while the patient is asleep. This method makes the treatment process safe and efficient for both the patient and the dentist.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Who is it Suitable For?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Individuals with mental or physical disabilities.</li>
          <li>Patients with severe dental phobia (dentophobia).</li>
          <li>Uncooperative children.</li>
          <li>Patients with an excessive gag reflex.</li>
        </ul>
        <p>The comfort and safety of our patient and their family are our priority. You can contact us for detailed information about the treatment process and to determine the most appropriate method.</p>`,
      de: `
        <p class="mb-4">Mund- und zahnärztliche Behandlungen für Personen mit körperlichen oder geistigen Behinderungen, die besondere Betreuung benötigen, erfordern einen speziellen Ansatz und eine spezielle Ausstattung. Unsere Klinik ist bestrebt, diesen Patienten die sicherste und komfortabelste Behandlungsumgebung zu bieten, indem wir ihre Bedürfnisse verstehen.</p>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Unser besonderer Ansatz</h3>
        <p class="mb-4">Wir bieten spezielle Lösungen für unsere Patienten, die unter normalen klinischen Bedingungen Schwierigkeiten haben, zu kommunizieren oder ruhig im Stuhl zu bleiben:</p>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li><strong>Sedierung (Dämmerschlaf):</strong> Der Patient wird mit Medikamenten beruhigt, die Angst und Stress reduzieren, während er bei Bewusstsein bleibt. Mit dieser Methode entspannt sich der Patient und wird kooperativer für die Behandlung.</li>
          <li><strong>Allgemeinanästhesie (Vollnarkose):</strong> Insbesondere für unsere nicht kooperativen Patienten mit schweren körperlichen oder geistigen Behinderungen werden alle Zahnbehandlungen (Füllungen, Wurzelkanäle, Extraktionen, Reinigung) in einer einzigen Sitzung unter der Kontrolle eines Anästhesisten in einem voll ausgestatteten Operationssaal durchgeführt, während der Patient schläft. Diese Methode macht den Behandlungsprozess sowohl für den Patienten als auch für den Zahnarzt sicher und effizient.</li>
        </ul>
        <h3 class="text-xl font-semibold text-brand-blue mt-6 mb-3">Für wen ist es geeignet?</h3>
        <ul class="list-disc list-inside space-y-2 mb-4">
          <li>Personen mit geistigen oder körperlichen Behinderungen.</li>
          <li>Patienten mit schwerer Zahnarztphobie (Dentophobie).</li>
          <li>Nicht kooperative Kinder.</li>
          <li>Patienten mit einem übermäßigen Würgereflex.</li>
        </ul>
        <p>Der Komfort und die Sicherheit unserer Patienten und ihrer Familien haben für uns Priorität. Sie können uns für detaillierte Informationen über den Behandlungsprozess und zur Bestimmung der am besten geeigneten Methode kontaktieren.</p>`
    },
    icon: React.createElement(FaceSmileIcon),
    imageUrl: 'https://i.imgur.com/BDBCIZj.jpg',
  },
];

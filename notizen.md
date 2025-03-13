# 1.)Component
### **Component (Bileşen) Nedir?**  
Angular'da **Component (bileşen)**, **kendi HTML, CSS ve TypeScript kodlarına sahip, yeniden kullanılabilir arayüz parçalarıdır**. Uygulamayı küçük, yönetilebilir ve modüler parçalara bölmeye yardımcı olur.

---

## **Angular Component'in Yapısı**
Bir bileşen **3 ana bölümden oluşur**:
1. **TypeScript (iş mantığı) →** `app.component.ts`  
2. **HTML (görünüm) →** `app.component.html`  
3. **CSS (stiller) →** `app.component.css`  

Bir component, Angular'da **`@Component` dekoratörü** ile tanımlanır.

---

## **Component Örneği**
📌 **Adım 1: Yeni bir Component oluşturma**  
Eğer Angular CLI kullanıyorsan şu komutla yeni bir bileşen oluşturabilirsin:
```bash
ng generate component kullanici
```
Bu komut, **4 dosya oluşturur**:
```
/src/app/kullanici/
    kullanici.component.ts
    kullanici.component.html
    kullanici.component.css
    kullanici.component.spec.ts
```

📌 **Adım 2: Component Kodu**
**`kullanici.component.ts` (TypeScript – İş Mantığı)**
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-kullanici',  // HTML'de kullanılacak etiket
  templateUrl: './kullanici.component.html',
  styleUrls: ['./kullanici.component.css']
})
export class KullaniciComponent {
  ad: string = 'Ali';
  yas: number = 25;
}
```

📌 **Adım 3: HTML Şablonu**
**`kullanici.component.html`**
```html
<p>Kullanıcı Adı: {{ ad }}</p>
<p>Yaş: {{ yas }}</p>
```

📌 **Adım 4: Component'i Kullanma**  
Bileşeni `app.component.html` içinde şu şekilde kullanabilirsin:
```html
<h1>Merhaba Angular!</h1>
<app-kullanici></app-kullanici>
```
Bu, `kullanici.component.html` içeriğini ana bileşene ekler.

---

## **Component Dekoratörü Açıklaması**
Bileşenler, **`@Component` dekoratörü** ile tanımlanır:
```typescript
@Component({
  selector: 'app-kullanici',      // HTML etiketi olarak kullanılır
  templateUrl: './kullanici.component.html', // HTML dosyası
  styleUrls: ['./kullanici.component.css']   // CSS dosyası
})
```
- **`selector`** → Bileşenin HTML'de `<app-kullanici></app-kullanici>` şeklinde kullanılmasını sağlar.  
- **`templateUrl`** → Component’in HTML dosyasını belirtir.  
- **`styleUrls`** → CSS dosyalarını belirtir.

---

## **Component'in Avantajları**
✔ **Yeniden kullanılabilir** – Farklı yerlerde aynı bileşeni tekrar kullanabilirsin.  
✔ **Daha okunaklı kod** – Büyük projeleri küçük parçalar halinde yönetmeni sağlar.  
✔ **Kolay bakım** – Bir bileşende değişiklik yaparsan, sadece o bileşeni güncellemen yeterli olur.  
✔ **Bağımsız çalışma** – Bir bileşen diğerlerinden bağımsız olarak çalışabilir.  

---

## **Sonuç**
**Angular'da Component**, uygulamanın **temel yapı taşıdır**.  
Her bileşenin kendi HTML, CSS ve TypeScript dosyaları vardır ve uygulamayı modüler hale getirir. 🚀


# 2.) Data Binding
- Data Binding, Angular'da veri ile HTML arasındaki senkronizasyonu sağlayan bir mekanizmadır. Kullanıcı arayüzü (UI) ile bileşen (component) arasındaki veri akışını yönetir.
### **Data Binding Nedir?**  
**Data Binding**, Angular'da **veri ile HTML arasındaki senkronizasyonu** sağlayan bir mekanizmadır. Kullanıcı arayüzü (UI) ile bileşen (component) arasındaki veri akışını yönetir.

---

## **Angular'da 4 Tür Data Binding Vardır:**
### 1️⃣ **Interpolation ({{ }})** – Tek Yönlü (One-Way)
Veriyi bileşenden (TypeScript) alıp HTML içinde göstermek için kullanılır.

📌 **Örnek:**
```typescript
export class AppComponent {
  kullaniciAdi: string = "Ali";
}
```
```html
<p>Merhaba, {{ kullaniciAdi }}!</p>
```
**Çıktı:**  
```
Merhaba, Ali!
```

---

### 2️⃣ **Property Binding ([ ])** – Tek Yönlü (One-Way)
HTML içindeki **bir özelliğe (attribute)** bileşendeki değeri bağlamak için kullanılır.

📌 **Örnek:**
```typescript
export class AppComponent {
  imageUrl: string = "https://angular.io/assets/images/logos/angular/angular.png";
}
```
```html
<img [src]="imageUrl">
```
Bu yöntem, interpolation (`{{ }}`) yerine kullanılır ve **daha performanslıdır**.

---

### 3️⃣ **Event Binding (( ))** – Tek Yönlü (One-Way)
HTML tarafındaki **kullanıcı etkileşimlerini (click, input, change vb.)** bileşendeki bir fonksiyona bağlamak için kullanılır.

📌 **Örnek:**
```typescript
export class AppComponent {
  sayac: number = 0;

  arttir() {
    this.sayac++;
  }
}
```
```html
<button (click)="arttir()">Arttır</button>
<p>Sayac: {{ sayac }}</p>
```
**Çıktı:**  
Butona her tıkladığında `sayac` değeri artar.

---

### 4️⃣ **Two-Way Binding ([(ngModel)])** – Çift Yönlü (Two-Way)
Kullanıcının HTML form elemanlarına girdiği veriyi **bileşene** bağlar ve anlık olarak günceller.

📌 **Örnek:**
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ad: string = '';
}
```
```html
<input [(ngModel)]="ad" placeholder="Adınızı girin">
<p>Merhaba, {{ ad }}!</p>
```
**🛑 Not:** `ngModel` kullanmak için `FormsModule`'ü **app.module.ts** içinde import etmek gerekir:
```typescript
import { FormsModule } from '@angular/forms';
```

---

## **Özet**
| Tür | Sembol | Yön | Kullanım Alanı |
|------|------|------|----------------|
| **Interpolation** | `{{ }}` | Component → HTML | Metinleri göstermek |
| **Property Binding** | `[property]` | Component → HTML | HTML özelliklerine değer bağlamak |
| **Event Binding** | `(event)` | HTML → Component | Kullanıcı olaylarını bileşene aktarmak |
| **Two-Way Binding** | `[(ngModel)]` | HTML ⬌ Component | Form kontrollerinde çift yönlü veri bağlamak |

Bu teknikleri kullanarak **dinamik ve etkileşimli Angular uygulamaları geliştirebilirsin! 🚀**


# 3.) Interpolation Syntax
Angular'da **interpolation ({{ }})** süslü parantezler kullanılarak değişkenleri HTML içine gömmek için kullanılan bir veri bağlama (data binding) tekniğidir. 

### **Kullanımı:**
```html
<p>{{ mesaj }}</p>
```
Burada, `mesaj` isimli bir değişkenin değeri HTML içinde görüntülenir.

### **Örnek:**
**TypeScript (component.ts)**
```typescript
export class AppComponent {
  mesaj: string = "Merhaba, Angular!";
}
```

**HTML (component.html)**
```html
<h1>{{ mesaj }}</h1>
```
**Çıktı:**
```
Merhaba, Angular!
```

---

### **Interpolation İçinde İfade Kullanımı**
Interpolation içerisine doğrudan matematiksel işlemler veya fonksiyon çağrıları yazılabilir:

```html
<p>{{ 5 + 10 }}</p> <!-- 15 -->
<p>{{ kullaniciAdi.toUpperCase() }}</p>
<p>{{ getMesaj() }}</p>
```

Ancak, interpolation içinde kompleks işlemler veya ağır fonksiyon çağrıları kullanmamak daha performanslı bir yaklaşımdır.

---

### **Interpolation ile Property Binding Arasındaki Fark**
Interpolation (`{{ }}`) sadece **string** dönüşümü yaparken, property binding (`[property]="value"`) direkt olarak DOM özelliklerini bağlar.

```html
<img src="{{ imageUrl }}">  <!-- Interpolation -->
<img [src]="imageUrl">      <!-- Property Binding -->
```
İkisi de aynı işlemi yapar, ancak **property binding daha performanslıdır**.

Interpolation daha çok **içerik görüntülemek** için kullanılır.

---

### **Sonuç**
- **Interpolation**, Angular'da değişkenleri veya ifadeleri HTML içinde göstermek için kullanılır.
- **Sadece okunabilir (one-way binding)** sağlar.
- **DOM özelliklerine doğrudan bağlanmak için property binding tercih edilmelidir**.

Bunları öğrenerek Angular projelerinde veri bağlamayı daha etkili kullanabilirsin! 🚀


# 4.) Directives
### **Directive (Yönerge) Nedir?**  
Angular'da **Directive (Yönerge)**, HTML etiketlerine **özelleştirilmiş davranışlar ekleyen** yapılardır. Component'ler de aslında bir **directive türüdür**, ancak genellikle **UI oluşturmak** için kullanılırken, directive'ler daha çok **var olan elementleri değiştirmek veya genişletmek için** kullanılır.

---

## **Directive Türleri**
Angular’da 3 çeşit directive bulunur:

| **Directive Türü**  | **Açıklama** | **Örnek** |
|---------------------|-------------|-----------|
| **Component Directive**  | Bileşenler (Component) de bir directive’dir. Ancak bir şablon (HTML) ile birlikte gelirler. | `<app-header></app-header>` |
| **Structural Directive**  | DOM'un yapısını değiştirir. (`*ngIf`, `*ngFor`, `*ngSwitch`) | `<div *ngIf="isVisible">Görünür</div>` |
| **Attribute Directive**  | Bir elementin görünümünü veya davranışını değiştirir. (`ngClass`, `ngStyle`, özel directive’ler) | `<p [ngClass]="{ 'active': isActive }">` |

---

## **1️⃣ Structural Directive (Yapısal Yönergeler)**
Bu direktifler, **DOM'a eleman ekleyip çıkarmamızı** sağlar.  

### **🔹 `*ngIf` → Koşula bağlı olarak elementi göster/gizle**
```html
<p *ngIf="goster">Bu metin sadece 'goster' true olduğunda görünür.</p>
```
**TypeScript (Component.ts)**
```typescript
goster: boolean = true;
```

---

### **🔹 `*ngFor` → Listeyi döngüyle oluştur**
```html
<ul>
  <li *ngFor="let urun of urunler">{{ urun }}</li>
</ul>
```
**TypeScript (Component.ts)**
```typescript
urunler: string[] = ["Telefon", "Bilgisayar", "Tablet"];
```
**Çıktı:**
```
- Telefon
- Bilgisayar
- Tablet
```

---

### **🔹 `*ngSwitch` → Çoklu koşul yapısı**
```html
<div [ngSwitch]="renk">
  <p *ngSwitchCase="'kırmızı'">Kırmızı Seçildi</p>
  <p *ngSwitchCase="'mavi'">Mavi Seçildi</p>
  <p *ngSwitchDefault>Diğer Renk</p>
</div>
```
**TypeScript**
```typescript
renk: string = "mavi";
```

---

## **2️⃣ Attribute Directive (Özellik Yönergeleri)**
Bu direktifler, **HTML elemanlarının görünümünü veya davranışını değiştirmek** için kullanılır.

### **🔹 `ngClass` → Dinamik CSS sınıfı ekleme**
```html
<p [ngClass]="{ 'aktif': isActive, 'pasif': !isActive }">Durum</p>
```
**TypeScript**
```typescript
isActive: boolean = true;
```
**CSS**
```css
.aktif { color: green; font-weight: bold; }
.pasif { color: red; text-decoration: line-through; }
```

---

### **🔹 `ngStyle` → Dinamik stil ekleme**
```html
<p [ngStyle]="{ 'color': renk, 'font-size': '20px' }">Bu yazı renkli!</p>
```
**TypeScript**
```typescript
renk: string = "blue";
```

---

## **3️⃣ Kendi Özel Directive’ini Yazmak**
Angular'da **özel directive** oluşturabilirsin.

📌 **Adım 1: Yeni Directive Oluşturma**
```bash
ng generate directive highlight
```
Bu komut `highlight.directive.ts` dosyasını oluşturur.

📌 **Adım 2: Directive Kodları**
**`highlight.directive.ts`**
```typescript
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // HTML'de [appHighlight] olarak kullanılacak
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}
```

📌 **Adım 3: HTML İçinde Kullanma**
```html
<p appHighlight>Üzerine gelince sarı olacak!</p>
```
Bu şekilde, fareyle üzerine gelindiğinde arka plan sarı olur.

---

## **Sonuç**
✔ **Directive'ler**, Angular'ın güçlü özelliklerinden biridir.  
✔ **Structural Directive** (`*ngIf`, `*ngFor`) DOM'u değiştirir.  
✔ **Attribute Directive** (`ngClass`, `ngStyle`) elementin görünümünü değiştirir.  
✔ **Kendi directive'ini** yazarak özel işlevler oluşturabilirsin. 🚀


# 5.) Pipe

### **Pipe Nedir? (Borulama Sistemi 🚀)**  
Angular’da **Pipe (Boru Operatörü)**, verileri **formatlamak (dönüştürmek)** için kullanılır. **Metin, tarih, para birimi veya sayıları farklı bir biçime sokmak** için kullanılır.

---

## **Pipe Kullanımı**  
Pipe'lar `|` sembolü ile kullanılır:  
```html
{{ veri | pipeAdı }}
```
📌 **Örnek:**  
```html
<p>{{ 'Merhaba Dünya' | uppercase }}</p>  <!-- Çıktı: MERHABA DÜNYA -->
<p>{{ 3.14159 | number:'1.2-2' }}</p>     <!-- Çıktı: 3.14 -->
```

---

## **Angular’da Hazır Pipe’lar**
| **Pipe**       | **Açıklama** | **Örnek Kullanım** | **Çıktı** |
|---------------|-------------|--------------------|-----------|
| **`uppercase`** | Metni büyük harfe çevirir | `{{ 'hello' | uppercase }}` | `HELLO` |
| **`lowercase`** | Metni küçük harfe çevirir | `{{ 'Hello' | lowercase }}` | `hello` |
| **`titlecase`** | İlk harfleri büyük yapar | `{{ 'angular pipe' | titlecase }}` | `Angular Pipe` |
| **`date`** | Tarihi biçimlendirir | `{{ today | date:'dd/MM/yyyy' }}` | `13/03/2025` |
| **`currency`** | Sayıyı para formatına çevirir | `{{ 1500 | currency:'TRY' }}` | `₺1,500.00` |
| **`percent`** | Sayıyı % formatına çevirir | `{{ 0.75 | percent }}` | `75%` |
| **`number`** | Sayıyı formatlar | `{{ 1234.567 | number:'1.1-2' }}` | `1,234.57` |
| **`json`** | JSON verisini string olarak gösterir | `{{ {ad: 'Ali'} | json }}` | `{"ad":"Ali"}` |

---

## **1️⃣ `date` Pipe (Tarih Formatlama)**
📌 **Kullanımı:**  
```html
<p>{{ today | date:'fullDate' }}</p>
<p>{{ today | date:'dd/MM/yyyy' }}</p>
```
📌 **TypeScript (Component.ts)**  
```typescript
today: Date = new Date();
```
📌 **Olası Formatlar:**  
| **Format**       | **Çıktı (Örnek: 13 Mart 2025)** |
|------------------|--------------------------------|
| `'short'`       | `3/13/25, 12:00 AM` |
| `'medium'`      | `Mar 13, 2025` |
| `'long'`        | `March 13, 2025` |
| `'fullDate'`    | `Thursday, March 13, 2025` |

---

## **2️⃣ `currency` Pipe (Para Formatlama)**
📌 **Örnek:**  
```html
<p>{{ 1000 | currency:'USD' }}</p>   <!-- Çıktı: $1,000.00 -->
<p>{{ 1000 | currency:'TRY' }}</p>   <!-- Çıktı: ₺1,000.00 -->
```

📌 **Özel Ayarlamalar:**  
```html
<p>{{ 1000 | currency:'EUR':'symbol':'4.2-2' }}</p> 
<!-- Çıktı: €1,000.00 -->
```
- `'symbol'` → Para birimi sembolü kullanır (€,$,₺).  
- `'code'` → Kodu gösterir (USD, TRY, EUR).  
- `'4.2-2'` → Minimum 4 basamaklı, en az 2 ondalık göster.

---

## **3️⃣ `slice` Pipe (Dizileri Kesmek)**
📌 **Örnek:**  
```html
<p>{{ 'Merhaba Angular' | slice:0:7 }}</p>   <!-- Çıktı: Merhaba -->
```
Dizilerle de çalışır:  
```html
<li *ngFor="let item of liste | slice:1:3">{{ item }}</li>
```
**TypeScript:**  
```typescript
liste = ['Elma', 'Armut', 'Muz', 'Çilek'];
```
**Çıktı:**  
```
- Armut
- Muz
```

---

## **4️⃣ `async` Pipe (Promise ve Observable)**
Angular'da `async` pipe, **Promise ve Observable** verilerini beklemek için kullanılır.

📌 **Örnek:**  
```html
<p>{{ veri$ | async }}</p>
```
**TypeScript:**
```typescript
import { of } from 'rxjs';

veri$ = of("Merhaba, Veri Yüklendi!");
```
Bu şekilde, `async` pipe ile Observable veri **otomatik çözümlenir**.

---

## **5️⃣ Kendi Pipe'ını Yazmak**
Eğer hazır pipe'lar yeterli gelmezse, özel pipe oluşturabilirsin.  

📌 **Adım 1: Yeni Pipe Oluşturma**  
```bash
ng generate pipe reverse
```
📌 **Adım 2: Pipe Kodları (`reverse.pipe.ts`)**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```
📌 **Adım 3: Kullanımı**
```html
<p>{{ 'Angular' | reverse }}</p>  <!-- Çıktı: ralugnA -->
```

---

## **Sonuç**
✔ **Pipe’lar**, Angular'da veriyi biçimlendirmek için kullanılır.  
✔ `|` sembolü ile uygulanır.  
✔ Hazır pipe’lar (`uppercase`, `date`, `currency` vb.) mevcuttur.  
✔ **Kendi özel pipe’larını** yazabilirsin.  

Pipe'ları kullanarak **verileri kolayca formatlayabilir ve okunabilir hale getirebilirsin! 🚀**

# 6.) Communication zwischen Components

## **Component Communication (Bileşenler Arası İletişim) Nedir?**  
Angular uygulamalarında, bileşenlerin **birbiriyle veri paylaşmasını** sağlamak için **Component Communication** yöntemleri kullanılır.  

### 🔹 **Senaryolar:**  
✅ **Ebeveyn (Parent) → Çocuk (Child) Component** veri göndermek  
✅ **Çocuk (Child) → Ebeveyn (Parent) Component** veri göndermek  
✅ **Kardeş (Sibling) Component’ler** arasında veri paylaşmak  
✅ **Hizmetler (Service) ile global veri yönetmek**  

---

## **1️⃣ Parent → Child (Ebeveynden Çocuğa Veri Gönderme)**
📌 **@Input() dekoratörü** kullanılır.

### **Örnek: Kullanıcı Bilgisi Gönderme**
**Adım 1: Çocuk Component (user.component.ts)**  
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>Kullanıcı Adı: {{ ad }}</p>`
})
export class UserComponent {
  @Input() ad!: string;  // Parent'tan veri alır
}
```
**Adım 2: Parent Component (app.component.html)**  
```html
<app-user [ad]="'Ali'"></app-user>
```
**Çıktı:**
```
Kullanıcı Adı: Ali
```

✔ **@Input() ile Parent, Child’a veri gönderir.**  

---

## **2️⃣ Child → Parent (Çocuktan Ebeveyne Veri Gönderme)**
📌 **@Output() ve EventEmitter** kullanılır.

### **Örnek: Butona Basınca Parent’e Veri Gönderme**
**Adım 1: Çocuk Component (child.component.ts)**  
```typescript
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="butonaBas()">Gönder</button>`
})
export class ChildComponent {
  @Output() dataGonder = new EventEmitter<string>();

  butonaBas() {
    this.dataGonder.emit('Merhaba, Parent!');
  }
}
```
**Adım 2: Parent Component (app.component.html)**  
```html
<app-child (dataGonder)="mesajAl($event)"></app-child>
<p>{{ gelenMesaj }}</p>
```
**Adım 3: Parent Component (app.component.ts)**  
```typescript
export class AppComponent {
  gelenMesaj: string = '';

  mesajAl(mesaj: string) {
    this.gelenMesaj = mesaj;
  }
}
```
✔ **@Output() ve EventEmitter ile Child, Parent’a veri gönderir.**  

---

## **3️⃣ Sibling → Sibling (Kardeş Bileşenler Arasında Veri Paylaşma)**
📌 **Service + Subject (RxJS)** kullanılır.

### **Örnek: Kardeş Bileşenler Arasında Veri Paylaşımı**
**Adım 1: Veri Servisi (data.service.ts)**
```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mesajKaynak = new BehaviorSubject<string>('Varsayılan Mesaj');
  mesaj$ = this.mesajKaynak.asObservable();

  mesajGuncelle(yeniMesaj: string) {
    this.mesajKaynak.next(yeniMesaj);
  }
}
```
**Adım 2: Birinci Kardeş Component (sender.component.ts)**
```typescript
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sender',
  template: `<button (click)="gonder()">Mesaj Gönder</button>`
})
export class SenderComponent {
  constructor(private dataService: DataService) {}

  gonder() {
    this.dataService.mesajGuncelle('Yeni Mesaj!');
  }
}
```
**Adım 3: İkinci Kardeş Component (receiver.component.ts)**
```typescript
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-receiver',
  template: `<p>Alınan Mesaj: {{ mesaj }}</p>`
})
export class ReceiverComponent {
  mesaj: string = '';

  constructor(private dataService: DataService) {
    this.dataService.mesaj$.subscribe(data => {
      this.mesaj = data;
    });
  }
}
```
✔ **RxJS BehaviorSubject ile kardeş bileşenler arasında veri paylaşılır.**  

---

## **4️⃣ Global Veri Yönetimi (Service ile)**
📌 **Service + Dependency Injection** kullanılır.

Eğer birden fazla bileşen aynı veriyi paylaşmak istiyorsa, **bir servis oluşturup onu tüm bileşenlerde enjekte edebiliriz.**  

---

## **Özet**
| **İletişim Türü**  | **Yöntem** | **Açıklama** |
|-------------------|-----------|-------------|
| Parent → Child | `@Input()` | Ebeveynden çocuğa veri gönderme |
| Child → Parent | `@Output() + EventEmitter` | Çocuktan ebeveyne veri gönderme |
| Sibling ↔ Sibling | `Service + RxJS` | Kardeş bileşenler arasında veri paylaşma |
| Global State | `Service + Dependency Injection` | Global veri yönetimi |

**Sonuç:**  
Angular'da bileşenler arasındaki iletişim için **@Input(), @Output(), Service ve RxJS** gibi teknikleri kullanarak **modüler ve ölçeklenebilir uygulamalar geliştirebilirsin! 🚀**


# 7.) Component Life Cycle

### **Angular Component Life Cycle Hooks Nedir?** 🚀  

**Component Life Cycle Hooks**, Angular bileşenlerinin **oluşturulma, güncellenme ve yok edilme süreçlerini kontrol etmek için** kullanılan özel metodlardır.  

Her Angular bileşeni, belirli aşamalardan geçer ve bu aşamalar sırasında **Angular belirli metotları otomatik olarak çağırır.**  

---

## **🎯 Component Lifecycle Aşamaları**
Bir bileşenin yaşam döngüsü aşağıdaki aşamalardan oluşur:

1️⃣ **Component Oluşturuluyor (`ngOnInit`)**  
2️⃣ **Component Güncelleniyor (`ngOnChanges`, `ngDoCheck`)**  
3️⃣ **Component Yok Ediliyor (`ngOnDestroy`)**  

![Angular Lifecycle](https://angular.io/generated/images/guide/lifecycle-hooks/hooks-in-sequence.png)  

---

## **📌 Angular Life Cycle Hooks ve Kullanımları**
Aşağıda en sık kullanılan **Lifecycle Hooks** ve işlevleri açıklanmıştır:

| **Hook** | **Ne Zaman Çalışır?** | **Kullanımı** |
|----------|----------------------|--------------|
| `ngOnChanges()` | **@Input() ile gelen veri değiştiğinde** | Parent → Child veri değişimlerini izler |
| `ngOnInit()` | **Component oluşturulduğunda (1 kere çalışır)** | İlk veri yükleme işlemleri yapılır |
| `ngDoCheck()` | **Her algılama döngüsünde (sürekli çalışır)** | Manuel değişiklik algılama |
| `ngAfterContentInit()` | **Component içine `<ng-content>` eklendiğinde** | İçerik projeksiyonu sonrası çalışır |
| `ngAfterContentChecked()` | **Her algılama döngüsünde çalışır** | `<ng-content>` değişikliklerini izler |
| `ngAfterViewInit()` | **Component’in ve Child bileşenlerinin HTML’i yüklendiğinde** | DOM manipülasyonu için uygundur |
| `ngAfterViewChecked()` | **Component HTML’i her güncellendiğinde** | HTML’de değişiklik varsa çalışır |
| `ngOnDestroy()` | **Component yok edildiğinde (1 kere çalışır)** | Bellek temizleme ve servis aboneliklerini iptal etme |

---

## **🔹 Kullanım Örnekleri**
Aşağıda her hook’un nasıl kullanıldığına dair örnekler bulabilirsiniz.

### **1️⃣ `ngOnInit()` (Component Yüklendiğinde Çalışır)**
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<p>Component Yüklendi</p>`
})
export class ExampleComponent implements OnInit {
  ngOnInit() {
    console.log('ngOnInit: Component yüklendi!');
  }
}
```
📌 **Kullanım Alanı:**  
✔ İlk veri yüklemeleri  
✔ API çağrıları  

---

### **2️⃣ `ngOnChanges()` (@Input() Değiştiğinde Çalışır)**
```typescript
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Gelen Veri: {{ data }}</p>`
})
export class ChildComponent implements OnChanges {
  @Input() data: string = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Veri değişti', changes);
  }
}
```
📌 **Kullanım Alanı:**  
✔ Parent → Child veri değişimlerini izleme  

---

### **3️⃣ `ngDoCheck()` (Her Algılama Döngüsünde Çalışır)**
```typescript
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<p>Her değişiklikte çalışır</p>`
})
export class ExampleComponent implements DoCheck {
  ngDoCheck() {
    console.log('ngDoCheck: Algılama döngüsü çalıştı!');
  }
}
```
📌 **Kullanım Alanı:**  
✔ Manuel değişiklik algılama  

---

### **4️⃣ `ngAfterViewInit()` (Component HTML Yüklendiğinde)**
```typescript
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<p #paragraf>İlk yüklenen metin</p>`
})
export class ExampleComponent implements AfterViewInit {
  ngAfterViewInit() {
    console.log('ngAfterViewInit: Component HTML yüklendi!');
  }
}
```
📌 **Kullanım Alanı:**  
✔ **DOM manipülasyonu yapmak için uygundur**  

---

### **5️⃣ `ngOnDestroy()` (Component Yok Edildiğinde Çalışır)**
```typescript
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `<p>Component Silindi</p>`
})
export class ExampleComponent implements OnDestroy {
  ngOnDestroy() {
    console.log('ngOnDestroy: Component yok edildi!');
  }
}
```
📌 **Kullanım Alanı:**  
✔ Bellek temizleme  
✔ `setTimeout` ve `setInterval` temizleme  
✔ RxJS aboneliklerini iptal etme  

---

## **🚀 Özet**
✔ **Lifecycle Hooks**, Angular bileşenlerinin yaşam döngüsünü kontrol etmek için kullanılır.  
✔ **`ngOnInit()`** → Component ilk yüklendiğinde çalışır.  
✔ **`ngOnChanges()`** → `@Input()` ile gelen veri değiştiğinde çalışır.  
✔ **`ngDoCheck()`** → Component içinde özel değişiklikleri algılar.  
✔ **`ngAfterViewInit()`** → HTML tamamen yüklendikten sonra çalışır.  
✔ **`ngOnDestroy()`** → Component yok edilmeden önce çalışır, bellek sızıntılarını önlemek için kullanılır.  

Bunları kullanarak **performanslı ve yönetilebilir Angular uygulamaları geliştirebilirsiniz!** 🚀
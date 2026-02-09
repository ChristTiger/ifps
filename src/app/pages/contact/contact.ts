import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Header } from "../../share/header/header";
import { Footer } from "../../share/footer/footer";

export interface ContactInfo {
  title: string;
  details: string[];
  iconPath: string;
  bgClass: string;
  action?: {
    text: string;
    link: string;
  };
}

export interface WhatsAppNumber {
  number: string;
  link: string;
  label?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Header, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  
  // Formulaire de contact
  contactForm!: FormGroup;
  isSubmitting = false;
  formSubmitted = false;
  formError = false;

  // Informations de contact
  contactInfos: ContactInfo[] = [
    {
      title: 'Téléphone',
      details: [
        '+237 679 40 98 53',
        '+237 656 08 14 67'
      ],
      iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      bgClass: 'bg-gradient-to-br from-blue-500 to-blue-700',
      action: {
        text: 'Appeler maintenant',
        link: 'tel:+237679409853'
      }
    },
    {
      title: 'Email',
      details: [
        'contact@ifpslesucces.com',
        'info@ifpslesucces.com'
      ],
      iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      bgClass: 'bg-gradient-to-br from-purple-500 to-purple-700',
      action: {
        text: 'Envoyer un email',
        link: 'mailto:contact@ifpslesucces.com'
      }
    },
    {
      title: 'Adresse',
      details: [
        'Douala, Marché Dakar (Maeture)',
        'Littoral, Cameroun'
      ],
      iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      bgClass: 'bg-gradient-to-br from-red-500 to-red-700',
      action: {
        text: 'Voir sur la carte',
        link: '#map'
      }
    }
  ];

  // Numéros WhatsApp
  whatsappNumbers: WhatsAppNumber[] = [
    {
      number: '+237 679 40 98 53',
      link: 'https://wa.me/237679409853?text=Bonjour,%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20formations',
      label: 'Principal'
    },
    {
      number: '+237 656 08 14 67',
      link: 'https://wa.me/237656081467?text=Bonjour,%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20formations',
      label: 'Secondaire'
    }
  ];

  // Horaires d'ouverture
  openingHours = {
    weekdays: 'Lundi - Vendredi : 8h00 - 17h00',
    saturday: 'Samedi : 9h00 - 14h00',
    sunday: 'Dimanche : Fermé'
  };

  // Date de rentrée
  rentreeDate = '05 Janvier 2026';

  // Liste des formations pour le select
  formations = {
    techniques: [
      'Pelle excavatrice',
      'Bulldozer',
      'Pelle chargeuse',
      'Reach Stacker',
      'Tractopelle',
      'Grues',
      'Niveleuse',
      'Compacteur'
    ],
    paramedicales: [
      'Auxiliaire de vie',
      'Délégué médical',
      'Soins infirmiers',
      'Aide chimiste biologiste',
      'Assistance en cabinet médical',
      'Technicien de laboratoire',
      'Vendeur en pharmacie'
    ],
    gestion_informatique: [
      'Secrétariat bureautique',
      'Secrétariat comptable',
      'Assistant de direction',
      'Comptabilité et gestion',
      'Douane et transit',
      'Logistique et transport',
      'Management des projets',
      'Gestion des stocks',
      'Ressources humaines',
      'Maintenance informatique',
      'Réseaux informatique',
      'Marketing digital',
      'Infographie 2D/3D',
      'Montage audio-visuel',
      'Développement Logiciel',
      'Webmaster',
      'Architecture 3D'
    ]
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.initScrollAnimations();
  }

  // Initialisation du formulaire
  initForm(): void {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^(\+237)?[0-9]{9}$/)]],
      formation: ['', Validators.required],
      message: ['']
    });
  }

  // Soumission du formulaire
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.formError = false;
      this.formSubmitted = false;

      // Récupération des données du formulaire
      const formData = this.contactForm.value;
      
      console.log('Données du formulaire:', formData);

      // Simulation d'envoi (remplacer par un vrai service HTTP)
      setTimeout(() => {
        this.isSubmitting = false;
        this.formSubmitted = true;
        
        // Réinitialiser le formulaire après succès
        this.contactForm.reset();

        // Masquer le message de succès après 5 secondes
        setTimeout(() => {
          this.formSubmitted = false;
        }, 5000);

        // Tracking Analytics
        this.trackFormSubmission(formData);
      }, 2000);

      // Exemple d'envoi réel avec HTTP:
      /*
      this.http.post('/api/contact', formData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.formSubmitted = true;
          this.contactForm.reset();
        },
        error: (error) => {
          this.isSubmitting = false;
          this.formError = true;
          console.error('Erreur:', error);
        }
      });
      */
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  // Initialisation des animations au scroll
  initScrollAnimations(): void {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      // Observer tous les éléments avec data-aos
      setTimeout(() => {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach((el) => observer.observe(el));
      }, 100);
    }
  }

  // Scroll vers la carte
  scrollToMap(): void {
    if (typeof document !== 'undefined') {
      const mapElement = document.getElementById('map');
      if (mapElement) {
        mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  // Tracking Analytics
  trackFormSubmission(formData: any): void {
    console.log('Track form submission:', formData);
    // Implémentation Google Analytics
    /*
    gtag('event', 'form_submission', {
      'event_category': 'Contact',
      'event_label': formData.formation,
      'value': 1
    });
    */
  }

  // Tracking des clics sur WhatsApp
  trackWhatsAppClick(number: string): void {
    console.log('Track WhatsApp click:', number);
    /*
    gtag('event', 'whatsapp_click', {
      'event_category': 'Contact',
      'event_label': number
    });
    */
  }

  // Tracking des clics sur téléphone
  trackPhoneClick(number: string): void {
    console.log('Track phone click:', number);
    /*
    gtag('event', 'phone_click', {
      'event_category': 'Contact',
      'event_label': number
    });
    */
  }

  // Tracking des clics sur email
  trackEmailClick(): void {
    console.log('Track email click');
    /*
    gtag('event', 'email_click', {
      'event_category': 'Contact'
    });
    */
  }

  // Getter pour faciliter l'accès aux contrôles du formulaire dans le template
  get f() {
    return this.contactForm.controls;
  }

  // Vérifier si un champ a une erreur
  hasError(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  // Obtenir le message d'erreur pour un champ
  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    
    if (field?.hasError('required')) {
      return 'Ce champ est requis';
    }
    
    if (field?.hasError('email')) {
      return 'Email invalide';
    }
    
    if (field?.hasError('minlength')) {
      return `Minimum ${field.errors?.['minlength'].requiredLength} caractères`;
    }
    
    if (field?.hasError('pattern')) {
      return 'Format invalide';
    }
    
    return '';
  }
}
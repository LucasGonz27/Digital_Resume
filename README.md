# Digital Resume - Lucas Gonzalez

Digital Resume personnel présentant mes compétences, expériences et projets en tant que développeur web et logiciel.

## 📋 Description

Site web Digital Resume moderne et responsive développé en PHP, HTML, CSS et JavaScript. Le site présente mon parcours professionnel, mes compétences techniques, mes expériences et mes projets réalisés. Il inclut également un formulaire de contact fonctionnel utilisant PHPMailer pour l'envoi d'emails.

## ✨ Fonctionnalités

- **Page d'accueil** : Présentation avec nom et titre professionnel
- **À propos** : Description personnelle et parcours académique
- **Compétences** : Affichage des technologies maîtrisées (C, CSS, HTML, Python, PHP, WordPress, JavaScript, SQL)
- **Expériences** : Timeline des expériences professionnelles et stages
- **Projets** : Galerie de projets avec descriptions et liens
- **Contact** : Formulaire de contact avec envoi d'email via PHPMailer
- **Design responsive** : Interface adaptée aux mobiles, tablettes et ordinateurs
- **Menu hamburger** : Navigation mobile optimisée

## 🛠️ Technologies utilisées

- **Backend** : PHP 7.4+
- **Frontend** : HTML5, CSS3, JavaScript (Vanilla)
- **Email** : PHPMailer 6.10+
- **Gestionnaire de dépendances** : Composer
- **Icônes** : Font Awesome 6.0

## 📦 Installation

### Prérequis

- PHP 7.4 ou supérieur
- Composer
- Serveur web (Apache/Nginx) ou serveur de développement PHP
- Accès SMTP (Gmail configuré dans le code)

### Étapes d'installation

1. **Cloner le dépôt** (ou télécharger les fichiers)
   ```bash
   git clone <url-du-repo>
   cd digital
   ```

2. **Installer les dépendances Composer**
   ```bash
   composer install
   ```

3. **Configurer l'envoi d'emails** (optionnel)
   
   Modifier les paramètres SMTP dans `index.php` :
   ```php
   $mail->Username = 'votre-email@gmail.com';
   $mail->Password = 'votre-mot-de-passe-application';
   ```

   > **Note** : Pour Gmail, vous devez utiliser un [mot de passe d'application](https://support.google.com/accounts/answer/185833) plutôt que votre mot de passe habituel.

4. **Lancer le serveur de développement** (si vous utilisez le serveur PHP intégré)
   ```bash
   php -S localhost:8000
   ```

5. **Accéder au site**
   
   Ouvrez votre navigateur et allez sur `http://localhost:8000`

## 📁 Structure du projet

```
digital/
├── css/
│   └── style.css          # Styles CSS principaux
├── images/                # Images du portfolio
├── vendor/                # Dépendances Composer (PHPMailer)
├── index.php              # Page principale
├── script.js              # Scripts JavaScript
├── composer.json          # Configuration Composer
└── README.md              # Ce fichier
```

## 🎨 Personnalisation

### Modifier les informations personnelles

Éditez le fichier `index.php` pour modifier :
- Nom et prénom (section `#home`)
- Description personnelle (section `#aboutme`)
- Expériences (section `#experience`)
- Projets (section `#project`)
- Informations de contact (section `#contact`)

### Modifier les couleurs

Les couleurs principales sont définies dans `css/style.css` :
- Bleu principal : `#2A7B9B`
- Vert : `#57C785`
- Jaune : `#EDDD53`


## 📧 Configuration du formulaire de contact

Le formulaire de contact utilise PHPMailer pour envoyer des emails via SMTP. Par défaut, il est configuré pour Gmail.

### Configuration Gmail

1. Activez l'authentification à deux facteurs sur votre compte Gmail
2. Générez un [mot de passe d'application](https://support.google.com/accounts/answer/185833)
3. Remplacez les identifiants dans `index.php` :
   ```php
   $mail->Username = 'votre-email@gmail.com';
   $mail->Password = 'votre-mot-de-passe-application';
   ```

### Utiliser un autre service SMTP

Modifiez les paramètres SMTP dans `index.php` :

```php
$mail->Host = 'smtp.votre-serveur.com';
$mail->Port = 587; // ou 465 pour SSL
$mail->SMTPSecure = 'tls'; // ou 'ssl'
```


## 📱 Compatibilité

Le site est compatible avec :
- Chrome, Firefox, Safari, Edge (versions récentes)
- iOS Safari
- Android Chrome
- Tablettes et mobiles

## 👤 Auteur

**Lucas Gonzalez**

## 📄 Licence

Ce projet est issus d'un projet Epitech


---

© 2025 Lucas Gonzalez. Tous droits réservés.


# Humoov V2 - Django + React Native (Expo)

## Description
Humoov V2 est une application web et mobile développée avec Django pour le backend et React Native (via Expo) pour le frontend. Ce projet est destiné à être une plateforme permettant d'interagir avec un backend Django, avec une interface mobile et web alimentée par React Native.

## Prérequis
- Node.js (version >= 14.x)
- Python (version >= 3.8)
- Expo CLI
- Django (version >= 4.0)
- pipenv ou virtualenv pour gérer les environnements Python

## Installation

### 1. Cloner le projet
Cloner ce repository dans votre répertoire local :

```bash
git clone https://github.com/mamo55/humoov-v2.git
cd humoov-v2
```

### 2. Configuration du backend (Django)

#### a. Créer un environnement virtuel
Nous vous recommandons d'utiliser un environnement virtuel pour installer les dépendances Python :

```bash
cd humoov2
python -m venv venv
```

#### b. Activer l'environnement virtuel
Sur macOS/Linux :
```bash
source venv/bin/activate
```

Sur Windows :
```bash
.\venv\Scripts\activate
```

#### c. Installer les dépendances backend
Ensuite, installez les dépendances Python nécessaires avec pip :

```bash
pip install -r requirements.txt
```

#### d. Appliquer les migrations de la base de données
```bash
python manage.py migrate
```

#### e. Lancer le serveur Django
Vous pouvez maintenant lancer le serveur Django :

```bash
python manage.py runserver
```

Cela démarrera le backend sur http://127.0.0.1:8000/.

### 3. Configuration du frontend (React Native avec Expo)

#### a. Installer les dépendances frontend
Assurez-vous que vous êtes dans le répertoire frontend :

```bash
cd frontend
```

Installez les dépendances avec npm :

```bash
npm install
```

#### b. Lancer l'application Expo
Pour démarrer l'application en mode web (et voir votre frontend dans un navigateur), utilisez la commande suivante :

```bash
npm run web
```

Cela lancera votre application React Native sur http://localhost:19006.

#### c. Lancer sur un appareil mobile
Pour tester l'application sur un appareil mobile, vous pouvez utiliser Expo Go. Scannez le QR code généré par npm run web ou exécutez la commande suivante :

```bash
npm run android  # Pour lancer sur un appareil Android
npm run ios      # Pour lancer sur un appareil iOS (si vous avez un Mac)
```

## Développement

### Backend (Django)
- Migrations : Pour créer de nouvelles migrations pour vos modèles Django, utilisez la commande `python manage.py makemigrations`.
- Création d'un superutilisateur : Pour créer un superutilisateur pour accéder à l'admin de Django, exécutez `python manage.py createsuperuser`.

### Frontend (React Native)
- Mise à jour des dépendances : Vous pouvez mettre à jour les dépendances avec `npm update`.
- Lancer un build : Pour générer une version de production, utilisez `npm run build`.

## Contribution
Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

1. Fork ce projet.
2. Créez une nouvelle branche (`git checkout -b feature-name`).
3. Effectuez vos modifications et validez-les (`git commit -am 'Add new feature'`).
4. Poussez votre branche (`git push origin feature-name`).
5. Ouvrez une pull request.

## Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

## Auteurs
Mehmet Matur - Développeur principal
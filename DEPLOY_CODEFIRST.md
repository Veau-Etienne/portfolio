# Deploiement CodeFirst

## Ce qui est deja prepare dans le projet

- `Dockerfile`
- `.dockerignore`
- `.gitlab-ci.yml`
- `next.config.ts` avec `output: "standalone"`

## Etapes a faire sur CodeFirst

1. Ouvrir `https://codefirst.iut.uca.fr/`.
2. Aller sur le GitLab CodeFirst.
3. Creer un nouveau projet vide.
4. Nommer le depot, le mettre dans votre namespace personnel, et le laisser en `Private`.
5. Recuperer l'URL HTTPS ou SSH du depot.

## Etapes a faire en local

1. Dans le dossier du projet :
   ```bash
   git init
   git add .
   git commit -m "Prepare portfolio for CodeFirst deployment"
   git branch -M main
   git remote add origin <URL_DU_DEPOT_CODEFIRST>
   git push -u origin main
   ```

## Variables GitLab a ajouter

Dans `Settings` > `CI/CD` > `Variables`, ajouter :

- `NAMESPACE_TOKEN` : token du namespace Kubernetes CodeFirst
- `K8S_NAMESPACE_NAME` : nom exact du namespace Kubernetes

## Pipeline

1. Aller dans `Build` > `Pipelines`.
2. Ouvrir le pipeline du push sur `main`.
3. Lancer `build-portfolio-image` si besoin.
4. Quand l'image est construite, lancer `deploy-portfolio`.

## Recuperer l'URL

1. Aller dans le Developer Portal CodeFirst.
2. Ouvrir votre namespace.
3. Ouvrir la carte du pod `portfolio`.
4. Copier l'URL publique du pod.

## Fichiers utiles

- `.gitlab-ci.yml`
- `Dockerfile`
- `next.config.ts`

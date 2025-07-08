FROM node:23-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm
RUN corepack prepare pnpm@10.0.0 --activate

WORKDIR /site
COPY ./package.json ./
COPY . ./

RUN pnpm install

EXPOSE 4000

CMD ["pnpm", "install"]

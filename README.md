<<<<<<< HEAD
# 🎧 DJ Niel — Press Kit

> Site profissional de press kit para o DJ Niel, artista independente de São Paulo — Zona Leste.
> **"Do Funk ao Charme, Da ZL pro Mundo"**

🔗 **[djniel.netlify.app](https://djniel.netlify.app)**

---

## 📋 Sobre o Projeto

Press kit digital desenvolvido para apresentação profissional do DJ Niel a casas de show, produtoras e contratantes. O site reúne biografia, repertório, trajetória, setup técnico e formulário de contato integrado com banco de dados e WhatsApp.

---

## ✨ Funcionalidades

- **Hero cinematográfico** com foto de fundo e logo em destaque
- **Seção Sobre** com bio e estatísticas de carreira
- **Repertório** com os gêneros musicais do set
- **Trajetória** com casas e eventos
- **Setup técnico** com equipamentos utilizados
- **Formulário de contato** que:
  - Salva a mensagem no banco de dados (Supabase)
  - Abre o WhatsApp com a mensagem formatada automaticamente
- **Navegação fixa** com scroll suave e link ativo por seção
- **Menu mobile** responsivo
- **Animações de scroll reveal** nos elementos
- **Deploy automático** via GitHub → Netlify

---

## 🛠️ Tecnologias

### Front-end

| Tecnologia | Versão | Descrição |
| :--- | :---: | :--- |
| HTML5 | — | Estrutura e semântica do site |
| CSS3 | — | Estilização completa — paleta preto, laranja e prata, animações e responsividade |
| JavaScript | ES2020+ | Interatividade, scroll reveal, menu mobile e integrações |
| Google Fonts | — | Tipografia: **Bebas Neue** (títulos) + **Inter** (corpo) |

### Back-end & Infraestrutura

| Tecnologia | Descrição |
| :--- | :--- |
| [Supabase](https://supabase.com) | Banco de dados PostgreSQL na nuvem para armazenar mensagens de contato, com Row Level Security (RLS) |
| [Netlify](https://netlify.com) | Hospedagem estática com deploy contínuo integrado ao GitHub |
| [Supabase JS SDK v2](https://supabase.com/docs/reference/javascript) | SDK oficial para comunicação entre o site e o banco via API REST |

---

## 📁 Estrutura do Projeto

```
=======
🎧 DJ Niel — Press Kit


Site profissional de press kit para o DJ Niel, artista independente de São Paulo — Zona Leste.
"Do Funk ao Charme, Da ZL pro Mundo"



🔗 djniel.netlify.app


📋 Sobre o Projeto

Press kit digital desenvolvido para apresentação profissional do DJ Niel a casas de show, produtoras e contratantes. O site reúne biografia, repertório, trajetória, setup técnico e formulário de contato integrado com banco de dados e WhatsApp.


✨ Funcionalidades


Hero cinematográfico com foto de fundo e logo em destaque
Seção Sobre com bio e estatísticas de carreira
Repertório com os gêneros musicais do set
Trajetória com casas e eventos
Setup técnico com equipamentos utilizados
Formulário de contato que:

Salva a mensagem no banco de dados (Supabase)
Abre o WhatsApp com a mensagem formatada automaticamente



Navegação fixa com scroll suave e link ativo por seção
Menu mobile responsivo
Animações de scroll reveal nos elementos
Deploy automático via GitHub → Netlify



🛠️ Tecnologias

Front-end

TecnologiaVersãoDescriçãoHTML5—Estrutura e semântica do siteCSS3—Estilização completa — paleta preto, laranja e prata, animações e responsividadeJavaScriptES2020+Interatividade, scroll reveal, menu mobile e integraçõesGoogle Fonts—Tipografia: Bebas Neue (títulos) + Inter (corpo)

Back-end & Infraestrutura

TecnologiaDescriçãoSupabaseBanco de dados PostgreSQL na nuvem para armazenar mensagens de contato, com Row Level Security (RLS)NetlifyHospedagem estática com deploy contínuo integrado ao GitHubSupabase JS SDK v2SDK oficial para comunicação entre o site e o banco via API REST


📁 Estrutura do Projeto

>>>>>>> 230abfc3f63ccdab77094c635b5547eda3950f03
djniel-presskit/
│
├── index.html          # Estrutura principal — seções Hero, Sobre, Repertório,
│                       # Trajetória, Setup e Contato
│
├── style.css           # Todos os estilos — variáveis CSS, layout, componentes,
│                       # animações e responsividade (mobile-first)
│
├── script.js           # Lógica do site — navbar, scroll reveal, menu mobile,
│                       # integração Supabase e envio via WhatsApp
│
├── README.md           # Documentação do projeto
│
└── assets/             # Imagens utilizadas no site
    ├── foto-hero.jpg       → Foto de fundo do Hero (P&B, efeito cinematográfico)
    ├── foto-sobre.png      → Foto da seção Sobre
    ├── logo-white.png      → Logo graffiti (versão Hero)
    ├── logo-white2.png     → Logo graffiti (versão Navbar e Footer)
    └── Segura-Logo.png     → Foto da seção Contato
<<<<<<< HEAD
```

---

## 🗄️ Banco de Dados (Supabase)

### Tabela `mensagens`

Armazena todas as mensagens enviadas pelo formulário de contato do site.

| Coluna | Tipo | Obrigatório | Descrição |
| :--- | :---: | :---: | :--- |
| `id` | `uuid` | ✅ | Identificador único gerado automaticamente |
| `nome` | `text` | ✅ | Nome do remetente |
| `contato` | `text` | ✅ | WhatsApp ou e-mail para retorno |
| `tipo_evento` | `text` | ❌ | Tipo de evento (aniversário, balada, etc.) |
| `mensagem` | `text` | ❌ | Mensagem livre com detalhes do evento |
| `criado_em` | `timestamptz` | ✅ | Data e hora do envio (preenchido automaticamente) |
| `lida` | `boolean` | ✅ | Controle de leitura — padrão `false` |

> As mensagens podem ser visualizadas diretamente no painel do Supabase em **Table Editor → mensagens**.

### Segurança (Row Level Security)

- **Anônimos** podem apenas **inserir** mensagens (via formulário do site)
- **Leitura** restrita ao painel autenticado do Supabase (só o dono do projeto acessa)

---

## 🚀 Como Rodar Localmente

```bash
# Clone o repositório
=======


🗄️ Banco de Dados (Supabase)

Tabela mensagens

Armazena todas as mensagens enviadas pelo formulário de contato do site.

ColunaTipoObrigatórioDescriçãoiduuid✅Identificador único gerado automaticamentenometext✅Nome do remetentecontatotext✅WhatsApp ou e-mail para retornotipo_eventotext❌Tipo de evento (aniversário, balada, etc.)mensagemtext❌Mensagem livre com detalhes do eventocriado_emtimestamptz✅Data e hora do envio (preenchido automaticamente)lidaboolean✅Controle de leitura — padrão false


As mensagens podem ser visualizadas diretamente no painel do Supabase em Table Editor → mensagens.



Segurança (Row Level Security)


Anônimos podem apenas inserir mensagens (via formulário do site)
Leitura restrita ao painel autenticado do Supabase (só o dono do projeto acessa)



🚀 Como Rodar Localmente

bash# Clone o repositório
>>>>>>> 230abfc3f63ccdab77094c635b5547eda3950f03
git clone https://github.com/RhanielFabricio/djniel-presskit.git

# Entre na pasta
cd djniel-presskit

# Abra no navegador
# (use Live Server no VS Code ou qualquer servidor local)
<<<<<<< HEAD
```

> ⚠️ Abrir o `index.html` diretamente pelo duplo clique (`file://`) pode causar problemas com o SDK do Supabase. Prefira usar o **Live Server** do VS Code.

---

## 🌐 Deploy

O projeto está configurado com **deploy contínuo**:

1. Qualquer `git push` na branch `main` dispara o deploy automaticamente no Netlify
2. Em segundos o site em produção já reflete as alterações

---

## 📌 Próximos Passos

- [ ] Adicionar flyers reais dos eventos na seção Trajetória
- [ ] Configurar notificação por e-mail ao receber nova mensagem (Resend + Supabase Edge Functions)
- [ ] Domínio personalizado (`djniel.com.br`)
- [ ] Seção de mídias / galeria de fotos

---

## 👨‍💻 Desenvolvido por

**Rhaniel Fabricio**
GitHub: [@RhanielFabricio](https://github.com/RhanielFabricio)

---

## 🎧 Artista

**DJ Niel**
Instagram: [@djniel011](https://instagram.com/djniel011)
WhatsApp: [Clique para conversar](https://wa.me/5511992346504)
=======


⚠️ Abrir o index.html diretamente pelo duplo clique (file://) pode causar problemas com o SDK do Supabase. Prefira usar o Live Server do VS Code.




🌐 Deploy

O projeto está configurado com deploy contínuo:


Qualquer git push na branch main dispara o deploy automaticamente no Netlify
Em segundos o site em produção já reflete as alterações



📌 Próximos Passos


 Adicionar flyers reais dos eventos na seção Trajetória
 Configurar notificação por e-mail ao receber nova mensagem (Resend + Supabase Edge Functions)
 Domínio personalizado (djniel.com.br)
 Seção de mídias / galeria de fotos



👨‍💻 Desenvolvido por

Rhaniel Fabricio
GitHub: @RhanielFabricio


🎧 Artista

DJ Niel
Instagram: @djniel011
WhatsApp: Clique para conversar
>>>>>>> 230abfc3f63ccdab77094c635b5547eda3950f03

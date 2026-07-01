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

TecnologiaUsoHTML5Estrutura do siteCSS3Estilização (paleta: preto, laranja, prata)JavaScript (Vanilla)Interatividade e integraçõesSupabaseBanco de dados para mensagens de contatoNetlifyHospedagem e deploy contínuoGoogle FontsFontes: Bebas Neue + Inter


📁 Estrutura do Projeto

djniel-presskit/
├── index.html          # Estrutura principal do site
├── style.css           # Estilos (paleta, layout, responsividade)
├── script.js           # Interatividade + integração Supabase/WhatsApp
├── README.md           # Documentação do projeto
├── foto-hero.jpg       # Foto de fundo do hero
├── foto-sobre.png      # Foto da seção Sobre
├── logo-white.png      # Logo (versão hero)
├── logo-white2.png     # Logo (versão navbar/footer)
└── Segura-Logo.png     # Foto da seção Contato


🗄️ Banco de Dados (Supabase)

Tabela mensagens

ColunaTipoDescriçãoiduuidIdentificador único (gerado automaticamente)nometextNome do remetentecontatotextWhatsApp ou e-mailtipo_eventotextTipo de evento (opcional)mensagemtextMensagem livre (opcional)criado_emtimestamptzData e hora do enviolidabooleanControle de leitura


As mensagens podem ser visualizadas diretamente no painel do Supabase em Table Editor → mensagens.



Segurança (Row Level Security)


Anônimos podem apenas inserir mensagens (via formulário do site)
Leitura restrita ao painel autenticado do Supabase (só o dono do projeto acessa)



🚀 Como Rodar Localmente

bash# Clone o repositório
git clone https://github.com/RhanielFabricio/djniel-presskit.git

# Entre na pasta
cd djniel-presskit

# Abra no navegador
# (use Live Server no VS Code ou qualquer servidor local)


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

"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[99796],{93576:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"logto-oss/file-storage-provider","title":"Provedor de armazenamento de arquivos","description":"Por padr\xe3o, o Logto Console usa uma entrada de texto para URLs de arquivos est\xe1ticos, como avatares. Para habilitar uma experi\xeancia de upload de arquivos mais intuitiva com arrastar e soltar, voc\xea precisa configurar um provedor de armazenamento.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/file-storage-provider.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/file-storage-provider","permalink":"/pt-BR/logto-oss/file-storage-provider","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/file-storage-provider.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Cache central","permalink":"/pt-BR/logto-oss/central-cache"},"next":{"title":"Desenvolver seu conector","permalink":"/pt-BR/logto-oss/develop-your-connector/"}}');var n=a(86070),s=a(15658);const c={sidebar_position:6},i="Provedor de armazenamento de arquivos",d={},t=[{value:"Azure Storage",id:"azure-storage",level:2},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",level:3},{value:"Configura\xe7\xe3o usando CLI",id:"configura\xe7\xe3o-usando-cli",level:3},{value:"<code>connectionString</code>",id:"connectionstring",level:4},{value:"<code>container</code>",id:"container",level:4},{value:"<code>publicUrl</code>",id:"publicurl",level:4},{value:"S3 Storage",id:"s3-storage",level:2},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos-1",level:3},{value:"Configura\xe7\xe3o usando CLI",id:"configura\xe7\xe3o-usando-cli-1",level:3},{value:"<code>accessKeyId</code>",id:"accesskeyid",level:4},{value:"<code>accessSecretKey</code>",id:"accesssecretkey",level:4},{value:"<code>bucket</code>",id:"bucket",level:4},{value:"<code>region</code>",id:"region",level:4},{value:"<code>endpoint</code>",id:"endpoint",level:4},{value:"<code>publicUrl</code>",id:"publicurl-1",level:4},{value:"Google Cloud Storage",id:"google-cloud-storage",level:2},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos-2",level:3},{value:"Obter o arquivo de chave",id:"obter-o-arquivo-de-chave",level:3},{value:"Adicionar o arquivo de chave ao Logto",id:"adicionar-o-arquivo-de-chave-ao-logto",level:3},{value:"Configura\xe7\xe3o usando CLI",id:"configura\xe7\xe3o-usando-cli-2",level:3},{value:"<code>projectId</code>",id:"projectid",level:4},{value:"<code>keyFilename</code>",id:"keyfilename",level:4},{value:"<code>bucketName</code>",id:"bucketname",level:4},{value:"<code>publicUrl</code>",id:"publicurl-2",level:4}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"provedor-de-armazenamento-de-arquivos",children:"Provedor de armazenamento de arquivos"})}),"\n",(0,n.jsx)(o.p,{children:"Por padr\xe3o, o Logto Console usa uma entrada de texto para URLs de arquivos est\xe1ticos, como avatares. Para habilitar uma experi\xeancia de upload de arquivos mais intuitiva com arrastar e soltar, voc\xea precisa configurar um provedor de armazenamento."}),"\n",(0,n.jsx)(o.p,{children:"Logto suporta m\xfaltiplos provedores de armazenamento, incluindo AWS S3 e Azure Storage. Esta receita mostrar\xe1 como configurar um provedor de armazenamento para o Logto."}),"\n",(0,n.jsxs)(o.p,{children:["A configura\xe7\xe3o \xe9 armazenada na tabela ",(0,n.jsx)(o.code,{children:"systems"}),' do DB, mas \xe9 recomendado usar o CLI para configurar o provedor de armazenamento. Para mais informa\xe7\xf5es, experimente o comando "help":']}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sh",children:"pnpm logto db system --help\n"})}),"\n",(0,n.jsx)(o.h2,{id:"azure-storage",children:"Azure Storage"}),"\n",(0,n.jsx)(o.p,{children:"Azure Storage \xe9 uma solu\xe7\xe3o de armazenamento em nuvem poderosa e escal\xe1vel que permite armazenar e gerenciar seus dados na nuvem. A receita a seguir mostrar\xe1 como configurar o Azure Storage como um provedor de armazenamento para o Logto."}),"\n",(0,n.jsx)(o.h3,{id:"pr\xe9-requisitos",children:"Pr\xe9-requisitos"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview",children:"Conta do Azure Storage"})}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"configura\xe7\xe3o-usando-cli",children:"Configura\xe7\xe3o usando CLI"}),"\n",(0,n.jsx)(o.p,{children:"Exemplo de uso:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'pnpm logto db system set storageProvider \'{"provider":"AzureStorage","connectionString":"DefaultEndpointsProtocol=https;AccountName=logto;AccountKey=oRhfTBHOHiBxxxxxxxxxxxxxxxxZ0se6XROftl/Xrow==;EndpointSuffix=core.windows.net","container":"logto"}\'\n'})}),"\n",(0,n.jsx)(o.h4,{id:"connectionstring",children:(0,n.jsx)(o.code,{children:"connectionString"})}),"\n",(0,n.jsx)(o.p,{children:"Para acessar o Azure Storage, voc\xea precisa usar uma string de conex\xe3o, que \xe9 uma sequ\xeancia de caracteres que cont\xe9m as informa\xe7\xf5es necess\xe1rias para estabelecer uma conex\xe3o com sua conta de armazenamento."}),"\n",(0,n.jsxs)(o.p,{children:["Para obter a string de conex\xe3o, siga a documenta\xe7\xe3o oficial ",(0,n.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string",children:"Azure Storage connection string documentation"}),"."]}),"\n",(0,n.jsx)(o.h4,{id:"container",children:(0,n.jsx)(o.code,{children:"container"})}),"\n",(0,n.jsx)(o.p,{children:"O container \xe9 um recurso de armazenamento que armazena blobs. Voc\xea pode usar o container para organizar seus blobs e controlar o acesso aos seus dados."}),"\n",(0,n.jsxs)(o.p,{children:["Para criar um container, siga a documenta\xe7\xe3o oficial ",(0,n.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction#containers",children:"Azure Storage container documentation"}),"."]}),"\n",(0,n.jsx)(o.h4,{id:"publicurl",children:(0,n.jsx)(o.code,{children:"publicUrl"})}),"\n",(0,n.jsx)(o.p,{children:"Opcional."}),"\n",(0,n.jsxs)(o.p,{children:['A URL p\xfablica \xe9 a URL que pode ser usada para acessar o recurso de armazenamento publicamente. Se voc\xea n\xe3o estiver usando CDN, pode deix\xe1-la em branco para usar o "Ponto de extremidade prim\xe1rio" padr\xe3o do Azure Storage como a URL p\xfablica. Logto obter\xe1 esse valor de "connectionString" com a ajuda do Azure SDK. Para saber mais sobre o ponto de extremidade prim\xe1rio da sua conta de armazenamento, siga a documenta\xe7\xe3o oficial ',(0,n.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview#primary-endpoints",children:"Azure Storage primary endpoint documentation"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"s3-storage",children:"S3 Storage"}),"\n",(0,n.jsx)(o.p,{children:"S3 Storage \xe9 um servi\xe7o de armazenamento em nuvem que oferece armazenamento de objetos atrav\xe9s de uma interface de servi\xe7o web. A receita a seguir mostrar\xe1 como configurar o S3 Storage como um provedor de armazenamento para o Logto."}),"\n",(0,n.jsx)(o.h3,{id:"pr\xe9-requisitos-1",children:"Pr\xe9-requisitos"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets.html",children:"Conta do S3 Storage"})," ou outro servi\xe7o de armazenamento compat\xedvel com S3, como ",(0,n.jsx)(o.a,{href:"https://min.io/",children:"MinIO"})]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"configura\xe7\xe3o-usando-cli-1",children:"Configura\xe7\xe3o usando CLI"}),"\n",(0,n.jsx)(o.p,{children:"Exemplo de uso:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'pnpm logto db system set storageProvider \'{"provider":"S3Storage","accessKeyId":"my-access-key-id","accessSecretKey": "my-secret-access-key","bucket":"logto","endpoint":"https://s3.us-east-2.amazonaws.com"}\'\n'})}),"\n",(0,n.jsx)(o.h4,{id:"accesskeyid",children:(0,n.jsx)(o.code,{children:"accessKeyId"})}),"\n",(0,n.jsxs)(o.p,{children:["O ID da chave de acesso \xe9 um identificador para sua conta AWS. Para encontrar seu ID de chave de acesso para sua conta AWS, siga a documenta\xe7\xe3o oficial ",(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey",children:"AWS access key ID documentation"}),"."]}),"\n",(0,n.jsx)(o.h4,{id:"accesssecretkey",children:(0,n.jsx)(o.code,{children:"accessSecretKey"})}),"\n",(0,n.jsxs)(o.p,{children:["A chave de acesso secreta \xe9 usada em conjunto com o ID da chave de acesso para assinar solicita\xe7\xf5es program\xe1ticas. Para encontrar sua chave de acesso secreta para sua conta AWS, siga a documenta\xe7\xe3o oficial ",(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey",children:"AWS access key secret documentation"}),"."]}),"\n",(0,n.jsx)(o.h4,{id:"bucket",children:(0,n.jsx)(o.code,{children:"bucket"})}),"\n",(0,n.jsxs)(o.p,{children:["O bucket \xe9 um container para objetos armazenados no Amazon S3. Para criar um bucket, siga a documenta\xe7\xe3o oficial ",(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets.html",children:"AWS S3 bucket documentation"}),"."]}),"\n",(0,n.jsx)(o.h4,{id:"region",children:(0,n.jsx)(o.code,{children:"region"})}),"\n",(0,n.jsx)(o.p,{children:"Opcional."}),"\n",(0,n.jsxs)(o.p,{children:["A regi\xe3o \xe9 a regi\xe3o geogr\xe1fica onde o bucket AWS S3 est\xe1 localizado. Se ",(0,n.jsx)(o.code,{children:"endpoint"})," for um endpoint padr\xe3o do AWS S3, ele pode ser analisado a partir de ",(0,n.jsx)(o.code,{children:"endpoint"}),". Para encontrar sua regi\xe3o AWS S3, siga a documenta\xe7\xe3o oficial ",(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html",children:"AWS S3 region documentation"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Se voc\xea estiver usando um servi\xe7o de armazenamento compat\xedvel com S3, pode deixar este campo em branco."}),"\n",(0,n.jsx)(o.h4,{id:"endpoint",children:(0,n.jsx)(o.code,{children:"endpoint"})}),"\n",(0,n.jsx)(o.p,{children:"Opcional."}),"\n",(0,n.jsxs)(o.p,{children:["O endpoint \xe9 a URL usada para acessar o servi\xe7o AWS S3. Para encontrar seu endpoint AWS S3, siga a documenta\xe7\xe3o oficial ",(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html",children:"AWS S3 endpoint documentation"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Voc\xea pode deixar este campo em branco para usar o endpoint padr\xe3o para a regi\xe3o. Se voc\xea estiver usando um servi\xe7o de armazenamento compat\xedvel com S3, pode usar o endpoint do servi\xe7o."}),"\n",(0,n.jsx)(o.h4,{id:"publicurl-1",children:(0,n.jsx)(o.code,{children:"publicUrl"})}),"\n",(0,n.jsx)(o.p,{children:"Opcional."}),"\n",(0,n.jsx)(o.p,{children:"A URL p\xfablica \xe9 a URL que pode ser usada para acessar o recurso de armazenamento publicamente. Se voc\xea n\xe3o estiver usando CDN, pode deix\xe1-la em branco para usar a URL padr\xe3o do S3 Storage."}),"\n",(0,n.jsx)(o.h2,{id:"google-cloud-storage",children:"Google Cloud Storage"}),"\n",(0,n.jsx)(o.p,{children:"Google Cloud Storage \xe9 um servi\xe7o de armazenamento em nuvem que fornece armazenamento de objetos atrav\xe9s de uma interface de servi\xe7o web. O guia a seguir mostrar\xe1 como configurar o Google Cloud Storage como um provedor de armazenamento para o Logto."}),"\n",(0,n.jsx)(o.h3,{id:"pr\xe9-requisitos-2",children:"Pr\xe9-requisitos"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Um projeto do Google Cloud"}),"\n",(0,n.jsxs)(o.li,{children:["Um bucket, consulte a documenta\xe7\xe3o oficial do Google Cloud: ",(0,n.jsx)(o.a,{href:"https://cloud.google.com/storage/docs/creating-buckets",children:"https://cloud.google.com/storage/docs/creating-buckets"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"obter-o-arquivo-de-chave",children:"Obter o arquivo de chave"}),"\n",(0,n.jsx)(o.p,{children:'Os SDKs do Google Cloud geralmente usam um "arquivo de chave". Se voc\xea n\xe3o estiver familiarizado com o Google Cloud, esta pode ser a parte mais desafiadora. Veja como obt\xea-lo:'}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["V\xe1 para a p\xe1gina de contas de servi\xe7o: ",(0,n.jsx)(o.a,{href:"https://console.cloud.google.com/iam-admin/serviceaccounts",children:"https://console.cloud.google.com/iam-admin/serviceaccounts"})]}),"\n",(0,n.jsx)(o.li,{children:"Crie uma conta, insira um nome e continue."}),"\n",(0,n.jsx)(o.li,{children:'Na pr\xf3xima etapa, selecione o papel de "Storage Object User". Voc\xea pode encontr\xe1-lo usando o filtro.'}),"\n",(0,n.jsx)(o.li,{children:'Depois de terminar de criar a conta, v\xe1 para a p\xe1gina de detalhes da conta e selecione a guia "keys".'}),"\n",(0,n.jsx)(o.li,{children:'Clique em "add key", selecione "create a new key", escolha "json" no di\xe1logo e, em seguida, baixe seu arquivo json.'}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"adicionar-o-arquivo-de-chave-ao-logto",children:"Adicionar o arquivo de chave ao Logto"}),"\n",(0,n.jsx)(o.p,{children:"Logto deve ter acesso ao arquivo de chave."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Executando no Node.js"})}),"\n",(0,n.jsxs)(o.p,{children:["Copie o arquivo para ",(0,n.jsx)(o.code,{children:"/path/to/logto/core"})," e renomeie-o para ",(0,n.jsx)(o.code,{children:"google-storage-key.json"}),"."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Executando em um Container Docker"})}),"\n",(0,n.jsx)(o.p,{children:"Se voc\xea estiver executando o Logto em um container Docker, precisar\xe1 montar o arquivo no container. Supondo que voc\xea esteja usando o Docker Compose, adicione isso \xe0 sua configura\xe7\xe3o:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-yaml",children:"volumes:\n  - ./path/to/google-storage-key.json:/etc/logto/core/google-storage-key.json\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Lembre-se de substituir ",(0,n.jsx)(o.code,{children:"/path/to"})," pelo caminho real."]}),"\n",(0,n.jsx)(o.h3,{id:"configura\xe7\xe3o-usando-cli-2",children:"Configura\xe7\xe3o usando CLI"}),"\n",(0,n.jsx)(o.p,{children:"Exemplo de uso:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'pnpm logto db system set storageProvider \'{"provider":"GoogleStorage","projectId":"psychic-trainer-403801","keyFilename":"google-storage-key.json","bucketName":"logto-test2"}\'\n'})}),"\n",(0,n.jsx)(o.h4,{id:"projectid",children:(0,n.jsx)(o.code,{children:"projectId"})}),"\n",(0,n.jsx)(o.p,{children:"Seu ID de projeto do Google Cloud."}),"\n",(0,n.jsx)(o.h4,{id:"keyfilename",children:(0,n.jsx)(o.code,{children:"keyFilename"})}),"\n",(0,n.jsxs)(o.p,{children:["O nome do arquivo de chave, se voc\xea seguir os passos acima, ent\xe3o \xe9 ",(0,n.jsx)(o.code,{children:"google-storage-key.json"}),"."]}),"\n",(0,n.jsx)(o.h4,{id:"bucketname",children:(0,n.jsx)(o.code,{children:"bucketName"})}),"\n",(0,n.jsx)(o.p,{children:"O nome do bucket."}),"\n",(0,n.jsx)(o.h4,{id:"publicurl-2",children:(0,n.jsx)(o.code,{children:"publicUrl"})}),"\n",(0,n.jsx)(o.p,{children:"Opcional."}),"\n",(0,n.jsx)(o.p,{children:"A URL p\xfablica \xe9 a URL que pode ser usada para acessar o recurso de armazenamento publicamente. Se voc\xea n\xe3o estiver usando CDN, pode deix\xe1-la em branco para usar a URL padr\xe3o do S3 Storage."})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},15658:(e,o,a)=>{a.d(o,{R:()=>c,x:()=>i});var r=a(30758);const n={},s=r.createContext(n);function c(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);
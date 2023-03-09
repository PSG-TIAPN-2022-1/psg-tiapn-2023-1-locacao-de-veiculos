# Informações do Projeto
`TÍTULO DO PROJETO`  

......  Locação de Veículos ......

`CURSO` 

...... Análise e Desenvolvimento de Sistemas ......

## Participantes


> Os membros do grupo são: 
> - Lucas Laboissiere Ferreira
> - Marcos Rocha Simões Araujo
> - Rafael Ricardo de Oliveira Goulart
> - Vitor Carvalho Soares de Paula

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

O problema central que essa aplicação busca resolver é a simplificação do processo de aluguel. Com a aplicação, os usuários podem buscar, reservar e alugar veículos de forma rápida e prática, o que torna o processo de locação de carros mais fácil, acessível e seguro.



## Objetivos

......  O objetivo geral do trabalho é desenvolver um software para solucionar o problema de gerenciamento de locação de carros. O software permitirá que os usuários aluguem carros por um determinado período de tempo, enquanto a empresa de locação de carros gerencia seus veículos e clientes de forma eficiente.

Para alcançar esse objetivo geral, é possível estabelecer os seguintes objetivos específicos:

1 - Desenvolver um sistema de gerenciamento de estoque: O software deve permitir que a empresa de locação de carros gerencie seu estoque de veículos de forma eficiente, monitorando o status de cada carro, disponibilidade, manutenção e histórico de locações anteriores. Isso permitirá que a empresa tome decisões informadas sobre quando adquirir novos veículos, quando retirar veículos antigos e quando programar a manutenção preventiva.

2 - Criar um sistema de reservas online: O software deve permitir que os usuários reservem carros online, escolhendo o modelo e a data de início e término da locação. O sistema deve calcular automaticamente o valor da locação com base no modelo do carro escolhido, duração da locação e outras taxas aplicáveis. Isso simplificará o processo de reserva para o usuário e permitirá que a empresa gerencie melhor suas reservas, reduzindo o risco de reservas duplicadas ou conflitantes. ......



## Justificativa

......  A aplicação de locação de carros é importante porque oferece aos clientes uma alternativa de transporte flexível e acessível, sem a necessidade de possuir um veículo próprio. Além disso, é um serviço muito utilizado por viajantes e turistas, o que torna a aplicação uma opção interessante para o setor de turismo e mobilidade urbana.

No que diz respeito aos objetivos específicos, o sistema de gerenciamento de estoque é importante porque permite que a empresa de locação de carros gerencie seus veículos de forma eficiente, garantindo que seus veículos estejam sempre em boas condições de funcionamento e prontos para serem alugados. Além disso, o monitoramento do histórico de locações anteriores permite que a empresa identifique quais veículos são mais populares e possam ser adquiridos em maior quantidade.

Já o sistema de reservas online é importante porque permite que os clientes reservem carros com antecedência e facilidade, o que aumenta a eficiência do processo de locação e reduz o risco de erros ou conflitos nas reservas. Além disso, com o sistema de reservas online, a empresa pode gerenciar melhor sua capacidade de oferta e demanda, e planejar seus estoques de veículos de acordo com a procura.

Em geral, a motivação para trabalhar nesta aplicação vem da necessidade de fornecer um serviço mais eficiente, conveniente e acessível para os clientes que precisam de um meio de transporte temporário. Além disso, o gerenciamento eficiente dos veículos e das reservas pode ajudar a empresa a melhorar seus lucros e expandir seu negócio. ......



## Público-Alvo

......  Podemos identificar um público-alvo em potencial, que são pessoas e empresas que buscam um serviço de aluguel de carros de forma fácil, prática e segura. Este público-alvo pode incluir homens e mulheres de diferentes idades, incluindo jovens adultos (entre 18 e 30 anos), adultos (entre 31 e 50 anos) e idosos (acima de 50 anos).

A aplicação web de locação de veículos pode atender a diferentes necessidades desse público-alvo. Viajantes a lazer ou a negócios podem encontrar facilmente um carro para se locomover durante sua estadia, enquanto residentes urbanos podem alugar um carro para necessidades diárias, como compras ou transporte para o trabalho. Empresas de transporte também podem se beneficiar da facilidade de alugar veículos para fins comerciais.

Para atender às necessidades desse público-alvo, a aplicação web de locação de veículos deve ser projetada e desenvolvida de forma a oferecer uma experiência de uso amigável e intuitiva, com funcionalidades que permitam ao usuário pesquisar e reservar carros de forma rápida e eficiente. Além disso, a aplicação deve garantir a segurança e privacidade dos dados do usuário, com o cumprimento das leis e regulamentações de proteção de dados, como a Lei Geral de Proteção de Dados (LGPD) no Brasil. ......


 
# Especificações do Projeto

......  Para o projeto de desenvolvimento da aplicação de locação de carros, será utilizada uma abordagem simples, com foco na especificação de requisitos e na definição da arquitetura do software. Para isso, serão utilizadas técnicas e ferramentas comuns em projetos de desenvolvimento de software, como análise de requisitos, especificação de casos de uso, modelagem de dados, prototipagem, diagramas de arquitetura e uma metodologia ágil de desenvolvimento. O objetivo é garantir que a solução atenda às necessidades dos usuários e seja desenvolvida de forma eficiente e eficaz. ......



## Personas e Mapas de Empatia

......  
Persona 1 - Cliente Pessoa Física:

Nome: Ana

Descrição: Ana é uma mulher de 30 anos que mora na cidade e precisa de um carro para se locomover com frequência. Ela prefere carros compactos e econômicos e não quer gastar muito dinheiro com combustível. Ana não tem conhecimentos avançados em tecnologia, mas usa smartphones e aplicativos com frequência.

Mapa de Empatia da Persona 1 - Cliente Pessoa Física:

|O que a persona vê?      |	       O que a persona ouve?  |    O que a persona pensa e sente?    |       O que a persona diz e faz?           |
|-------------------------|-----------------------------------|--------------------------------------|--------------------------------------------|
|Dificuldades de locomoção|Comentários de amigos e familiares |	Quer economizar e gastar pouco com  combustível |Pesquisa carros compactos e econômicos.     |
|Anúncios em aplicativos e redes socias              | Sugestões de amigos               | Precisa de um carro para se locomover|   Usa aplicativos para comparar preços     |
|Opções variadas de locadoras|  Propagandas em meios de comunicação|Tem medo de ser enganada ou ter problemas| Verifica as avaliações das locadoras|
|Opiniões de outros usuários   | Comentários sobre o mercado de locação de carros | Deseja praticidade e agilidade| Realiza a reserva pelo aplicativo |

                


Persona 2 - Cliente Pessoa Jurídica:

Nome: João

Descrição: João é um empresário de 46 anos que administra uma pequena empresa de entregas na cidade. Ele precisa alugar carros para a sua equipe realizar as entregas, e prefere carros mais espaçosos e robustos. João tem conhecimentos básicos em tecnologia e costuma usar aplicativos de gestão empresarial em seu trabalho.


Mapa de Empatia da Persona 2 - Cliente Pessoa Jurídica:

|O que a persona vê?      |	       O que a persona ouve?      |    O que a persona pensa e sente?    |       O que a persona diz e faz?           |
|-------------------------|-----------------------------------|--------------------------------------|--------------------------------------------| 
|Dificuldades de transporte para a equipe|	Comentários de colegas empresários|	Necessidade de alugar carros regularmente|Verifica preços e promoções das locadoras   |
|Propagandas em meios de comunicação  | Sugestões de amigos            | Deseja carros espaçosos e robustos   |   Faz a reserva pelo aplicativo    |
|Opções variadas de locadoras |  Comentários sobre o mercado de locação de carros |Precisa de nota fiscal para reembolso |   Verifica a possibilidade de faturamento em nome da empresa |
|Condições de pagamento   | Comentários de outros usuários    |  Deseja agilidade no processo de reserva |    Realiza a reserva com antecedência  |



Persona 3 - Motorista de aplicativos:

Nome: Felipe

Descrição: Felipe é um jovem de 22 anos que trabalha como motorista de aplicativos em tempo integral. Ele não tem carro próprio e precisa alugar um veículo para trabalhar. Felipe busca um carro econômico e confortável para dirigir por longas horas, além de um preço acessível para poder ter uma renda satisfatória. Ele tem conhecimentos avançados em tecnologia e está sempre buscando ferramentas e aplicativos para otimizar o seu trabalho.


Mapa de Empatia da Persona 3 - Motorista de aplicativos:


|O que a persona vê?      |	       O que a persona ouve?      |    O que a persona pensa e sente?    |       O que a persona diz e faz?           |
|----------------------------|--------------------------------------|--------------------------------------|--------------------------------------------|
|Necessidade de alugar um carro |Sujestões de outros motoristas|Quer um carro econômico e confortável|Procura por aplicativos e locadoras com melhores preços|
|Anúncios em aplicativos e redes sociais | Comentários sobre o mercado de locação de carros |Precisa de um preço acessível para ter uma renda satisfatória|  Verifica as condições de pagamento|
|Variedade de opções de locadoras|  Dificuldade em encontrar um bom negócio|Deseja ter um carro disponível a qualquer hora| Reserva um carro com antecedência para garantir a disponibilidade|
|Opiniões de outros motoristas| Comentários sobre a qualidade dos carros |Deseja ter um bom suporte em caso de problemas |Verifica os canais de atendimento das locadoras|




			 ......





## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|cliente  | fazer uma reserva de carro com antecedência           | garantir a disponibilidade do carro na data e hora desejadas             |
|usuário   | criar e gerenciar uma conta | possa acessar minhas reservas anteriores e armazenar minhas informações pessoais e de pagamento com segurança |
|usuário | cancelar minha reserva, caso haja necessidade | evitar cobranças indevidas|
|usuário| pesquisar os carros disponíveis para aluguel | escolher o modelo que melhor atenda às minhas necessidades|




## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Sistema de reserva de veículos | ALTA | 
|RF-002| Pagamento online seguro  | ALTA |
|RF-003| Calendário de disponibilidade de veículos  | ALTA |
|RF-004| Filtro de pesquisa  | ALTA |
|RF-005| Sistema de cadastro de clientes | MÉDIA |
|RF-006| Avaliações e comentários dos clientes | BAIXA |
|RF-007| Sistema de atendimento ao cliente | BAIXA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Segurança | ALTA | 
|RNF-002| Velocidade |  MÉDIA | 
|RNF-003| Usabilidade |  ALTA | 
|RNF-004| Confiabilidade |  MÉDIA | 
|RNF-005| Escalabilidade |  BAIXA | 
|RNF-006| Compatibilidade | ALTA |
|RNF-007| Manutenibilidade | MÉDIA |




## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Restrição Legal: O site deve estar em conformidade com as leis e regulamentações locais e nacionais de locação de veículos, incluindo requisitos para documentação, seguro e segurança veicular. |
|02| Regulamentações de privacidade de dados: Para garantir a conformidade com o RGPD, a aplicação deve implementar uma política de privacidade clara e concisa, que explique aos usuários como seus dados pessoais serão coletados, armazenados e usados. |





# Projeto de Interface

......  O projeto de criação de site de locação de veículos exigirá uma interface amigável, intuitiva e fácil de usar para os usuários, que permita a reserva e a busca de veículos disponíveis, bem como a visualização de informações importantes, como preços, horários e datas.

Para atender a esses requisitos, o site será dividido em três principais interfaces: a interface de busca e reserva de veículos, a interface de gerenciamento de conta do usuário e a interface de gerenciamento de veículos para o administrador.

A interface de busca e reserva de veículos terá um formulário de pesquisa que permitirá aos usuários pesquisar veículos disponíveis com base em diferentes critérios, como localização, datas de reserva e tipo de veículo. A interface também permitirá aos usuários ver fotos dos veículos disponíveis, informações sobre preços, horários e outras informações relevantes, como políticas de seguro.

A interface de gerenciamento de conta do usuário permitirá aos usuários acessar e gerenciar suas informações pessoais, como nome, endereço e informações de pagamento, bem como visualizar o histórico de reservas e transações anteriores.

A interface de gerenciamento de veículos para o administrador permitirá gerenciar informações sobre veículos disponíveis, como preço, horários de disponibilidade e informações de reserva. Além disso, o administrador também poderá gerenciar o processo de reserva de veículos, verificar as transações e visualizar informações de usuários registrados.

Para garantir que as interfaces atendam aos requisitos funcionais, não funcionais e histórias de usuário, será necessário realizar testes de usabilidade e coletar feedback dos usuários durante todo o processo de desenvolvimento. Isso permitirá que a equipe de desenvolvimento faça ajustes e melhorias conforme necessário para garantir que as interfaces sejam eficazes e atendam às necessidades dos usuários.......

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

...... Durante a execução do projeto, o grupo adotou metodologias ágeis para orientar o processo de trabalho. Essa abordagem permitiu uma maior flexibilidade na tomada de decisões e adaptação às necessidades do projeto em tempo real. A equipe se dividiu em papéis e tarefas, cada um com suas responsabilidades específicas, para garantir a execução das atividades de maneira organizada e eficiente. 

Para garantir a comunicação fluida entre os membros da equipe, foram utilizadas ferramentas como o Discord e o Trello. O Discord permitiu a troca de mensagens instantâneas, a organização de canais temáticos e a realização de reuniões virtuais. Já o Trello foi utilizado para gerenciar as tarefas, definir prioridades e acompanhar o status de cada atividade. 

A gestão de configuração do projeto foi realizada por meio da plataforma GitHub. Essa ferramenta permitiu o controle das versões do projeto, a colaboração entre os membros da equipe e o rastreamento de bugs.  

Em suma, a adoção de metodologias ágeis, a divisão de papéis e tarefas, a utilização de ferramentas de comunicação e gerenciamento de tarefas, e a gestão de configuração do projeto via GitHub foram fundamentais para o sucesso do projeto. Essas práticas permitiram que a equipe trabalhasse de maneira colaborativa, organizada e eficiente, resultando em um produto final de alta qualidade e satisfação dos clientes. 

Processo Design Thinking 

Montamos um passo a passo a seguir: 

Empatia: Comece com a compreensão das necessidades e perspectivas dos usuários do site, incluindo seus objetivos ao alugar um carro, as dificuldades que enfrentam durante o processo de reserva, suas preferências de pagamento e outros fatores importantes. 

Definição do problema: Com base nas informações coletadas na etapa anterior, defina o problema ou problemas que o site de locação de veículos precisa resolver para melhorar a experiência do usuário e atender às suas necessidades de maneira mais eficaz. 

Ideação: Use técnicas criativas de brainstorming para gerar ideias para melhorar o site de locação de veículos. Considere ideias como tornar o processo de reserva mais fácil e intuitivo, fornecer informações mais detalhadas sobre a frota de veículos disponíveis, oferecer diferentes opções de pagamento, incluindo pacotes de seguro mais completos, entre outras. 

Prototipagem: Com base nas ideias geradas na etapa anterior, crie protótipos de soluções possíveis. Os protótipos podem incluir esboços de telas, modelos em papel, modelos de interface de usuário, etc. 

Teste: Teste os protótipos com usuários reais e obtenha feedback para entender o que funciona e o que não funciona. Use o feedback para iterar e refinar as soluções até chegar a uma solução final que resolva os problemas identificados na etapa de empatia e ofereça uma experiência de usuário excelente. 

Implementação: Depois de finalizar a solução, implemente-a no site de locação de veículos. Monitore os resultados e faça ajustes conforme necessário para garantir que a solução continue atendendo às necessidades dos usuários e melhorando a experiência geral do usuário. ......



## Divisão de Papéis

Rafael Ricardo de Oliveira Goulart: Desenvolvedor Full Stack 

Marcos Rocha Simões Araújo: Scrum Master/Desenvolvedor Full Stack 

Vitor Carvalho Soares de Paula: Desenvolvedor Full Stack 

Lucas Laboissiere Ferreira: Desenvolvedor Full Stack 

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas


| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Repositório de código | GitHub |(https://github.com/PSG-TIAPN-2022-1/psg-tiapn-2023-1-locacao-de-veiculos) | 
|Hospedagem do site | GitHub | (ainda não foi postado) | 
|Protótipo Interativo | Figma | (https://www.figma.com/file/xCB3boTCCdGYgvyjzM0oKn/Untitled?node-id=0%3A1&t=b2XOCvu1dZlVSDHk-1) | 
|Editor de código | VScode | sem link | 
|Ferramentas de comunicação | Teams, Discord e WhatsApp | sem link| 
|Ferramentas de diagramação| Figma e Trello |(https://trello.com/b/hiCVF8D8/kanban-quadro) | 

> O VScodefoi escolhido porque ele possui uma integração com o
> sistema de versão e é muito amplo em tecnologias. As ferramentas de comunicação utilizadas possuem
> integração semelhante, fora a facilidade de acesso e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essas ferramentas por ajudarem na idealização de design e organização de tarefas.
> 


## Controle de Versão

...... A configuração do projeto na ferramenta de versionamento Git foi realizada de maneira cuidadosa, garantindo a integridade do código-fonte e a colaboração eficiente da equipe. O Github foi utilizado para hospedagem do repositório upstream, que serviu como base para o desenvolvimento do projeto. 

A gerência de tags, merges, commits e branchs foi realizada de acordo com boas práticas do Git. Foram criados branchs específicos para cada funcionalidade do projeto e os commits foram realizados com mensagens claras e descritivas. A gerência de merges foi realizada com cuidado, garantindo que o código fosse integrado de maneira adequada e sem conflitos com outras funcionalidades em desenvolvimento. A utilização de tags foi feita para marcar pontos de referência importantes no desenvolvimento do projeto, como versões específicas ou lançamentos. 

A gerência de issues foi realizada utilizando a funcionalidade nativa do Github para registro e rastreamento de problemas. Cada problema foi registrado como um issue no repositório, e a equipe trabalhou em conjunto para resolvê-los. A ferramenta permitiu que cada issue fosse atribuído a um membro da equipe e fossem monitorados o status e as atividades relacionadas a ele. 

Em resumo, a ferramenta de controle de versão adotada no projeto, o Git, e a hospedagem no Github, permitiram uma gestão eficiente de tags, merges, commits e branchs. A gerência de issues foi realizada de maneira simples e organizada, permitindo que a equipe trabalhasse em conjunto para resolver problemas e melhorar a qualidade do projeto. ......

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)

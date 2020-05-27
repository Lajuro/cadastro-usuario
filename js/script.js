// Essa função foi criada usando o que é conhecido como "arrow function", esse parâmetro passado na função é correspondente ao evento. Toda função "addEventListener" possui uma outra função de callback dentro dela, essa função de callback possui o parâmetro que você pode nomear como "e", "event", coisas desse tipo, claro que é um nome variável, pode ser como quiser, mas normalmente segue esse padrão.

// Essa variável "e" carrega algumas informações sobre o evento. Como por exemplo, a localização do mouse na tela, caso o evento seja "keyDown", você conseguer identificar qual foi a tecla pressionada no teclado, por exemplo.

// No caso do "e.preventDefault()", ele faz com que o botão não faça a ação padrão dele, que no caso é enviar o formulário, o nome é auto-explicativo "Prevent" - de "Previne" e "Default" - de "Padrão", ou seja, previne a ação padrão.

const cadastrarUsuario = (e) => {
    e.preventDefault();

    // 1 - Pegar elementos
    let corpoTabela = document.querySelector('#tabelaUsuarios #corpoTabela');
    let campoNome = document.getElementById('nome');
    let campoEmail = document.getElementById('email');
    let campoAtivo = document.getElementById('ativo');
    let campoSexo = document.getElementById('sexo');
    
    // 2 - Pegar valor dos campos
    let nome = campoNome.value;
    let email = campoEmail.value;
    let ativo = campoAtivo.checked ? 'Ativo' : 'Desativado';
    let sexo = campoSexo.value;

    console.log('Nome: ' + nome, 'Email: ' +  email, 'Sexo: ' +  sexo, 'Ativo: ' +  ativo);

    // 3 - Criar elementos a serem inseridos na tabela
    let linha = document.createElement('tr');
    let colunaNome = document.createElement('td');
    let colunaEmail = document.createElement('td');
    let colunaAtivo = document.createElement('td');
    let colunaSexo = document.createElement('td');

    // 4 - Inserir texto nos elementos criados
    colunaNome.innerText = nome; // Insere o texto que foi resgatado do que foi digitado no campo input cujo id é "nome".
    colunaEmail.innerText = email; // Insere o texto que foi resgatado do que foi digitado no campo input cujo id é "email".
    colunaSexo.innerText = sexo; // Insere o texto que foi resgatado do que foi selecionado no campo option dentro do select cujo id é "sexo". Como não foi passado um "value" para as TAGS option, o valor que é pego é exatamente o valor dentro da própria TAG.
    colunaAtivo.innerText = ativo; // Insere o texto que foi resgatado do atual status do checkbox cujo id é "ativo". Caso ativado, aparecerá "Ativado", caso inativado, aparecerá "Desativado".

    // 5 - Inserir as colunas criadas dentro da linha
    linha.append(colunaNome); // Adiciona a coluna "Nome" dentro da linha que foi criada.
    linha.append(colunaEmail); // Adiciona a coluna "Email" dentro da linha que foi criada.
    linha.append(colunaSexo); // Adiciona a coluna "Sexo" dentro da linha que foi criada.
    linha.append(colunaAtivo); // Adiciona a coluna "Ativo" dentro da linha que foi criada.

    // 6 - Adicionar a linha criada dentro do DOM
    corpoTabela.append(linha);


    // 7 - Limpar os campos
    let formulario = document.getElementById('formulario'); // Seleciona o formulário que deseja limpar os campos
    formulario.reset(); // Executa a ação de limpar todos os campos
};



let botao = document.getElementById('cadastrar');

botao.addEventListener('click', cadastrarUsuario);
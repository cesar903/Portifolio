function abrirModal(){
    document.getElementById('modal').style.top="0";
    document.getElementById('modal').style.display="block";
}
function fecharModal(){
    document.getElementById('modal').style.top="-100%";
}


$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })


  $(function() {
    
    $('.mask-telefone').mask('(99) 9999-9999'); //Telefone
    $('.mask-celular').mask('(99) 99999-9999'); //celular
    $('.mask-cep').mask('99999-999'); //celular

    //Esta função faz com que o input name aceita apenas letras
    $(document).ready(function() {
        $('#nome').on('keypress', function(e) {
        var regex = new RegExp("^[a-zA-Z ]*$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        e.preventDefault();
        return false;
        });
    });

    });

    function dado_escolhido(){
        
        
        if(document.getElementById("cpf").checked){
            $('.mask-cpf').mask('999.999.999-99'); //CPF
            
        } else if (document.getElementById("cnpj").checked){
            $('.mask-cpf').mask('99.999.999/0001-99'); //CNPJ
        }

    };

    
    function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('estado').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('estado').value=(conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('estado').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

function valida(){
    return nome() && valida_cpf() && valida_tel() && valida_cep() && valida_numero() && salva_Dados()
}


function nome(){

    if(document.getElementById('nome').value == ""){

        document.getElementById("nome").style.borderBottom="red 3px solid";
        document.getElementById('resposta').innerHTML= `<i><b>Nome Obrigatorio...</b></i>`;
        document.getElementById("nome").focus();
        return false

    }else{
        document.getElementById('resposta').innerHTML= "";
        document.getElementById("nome").style.borderBottom="teal 3px solid";
        return true
    }
}

function valida_cpf(){

    if(document.getElementById('cpf_cnpj').value == ""){

        document.getElementById('resposta').innerHTML= `<i><b>CPF ou CNPJ Obrigatorio...</b></i>`;
        document.getElementById("cpf_cnpj").style.borderBottom="red 3px solid";
        document.getElementById("cpf_cnpj").focus();
        return false

    }else{
        document.getElementById("cpf_cnpj").style.borderBottom="teal 3px solid";
        document.getElementById('resposta').innerHTML= "";
        return true
    }
}

function valida_tel(){

    if(document.getElementById('celular').value == ""){

        document.getElementById('resposta').innerHTML= `<i><b>Celular Obrigatorio...</b></i>`;
        document.getElementById("celular").style.borderBottom="red 3px solid";
        document.getElementById("celular").focus();
        
        return false

    }else{
        document.getElementById("celular").style.borderBottom="teal 3px solid";
        document.getElementById('resposta').innerHTML= "";
        return true
    }
}

function valida_cep(){

    if(document.getElementById('cep').value == ""){

        document.getElementById('resposta').innerHTML= `<i><b>CEP Obrigatorio...</b></i>`;
        document.getElementById("cep").style.borderBottom="red 3px solid";
        document.getElementById("cep").focus();
        return false

    }else{
        document.getElementById("cep").style.borderBottom="teal 3px solid";
        document.getElementById('resposta').innerHTML= "";
        return true
    }
}

function valida_numero(){

    if(document.getElementById('numero').value == ""){

        document.getElementById('resposta').innerHTML= `<i><b>Numero Obrigatorio...</b></i>`;
        document.getElementById("numero").style.borderBottom="red 3px solid";
        document.getElementById("numero").focus();
        return false

    }else{
        document.getElementById("numero").style.borderBottom="teal 3px solid";
        document.getElementById('resposta').innerHTML= "";
        return true
    }
}


function salva_Dados(){
    let nome = document.getElementById('nome').value
    let cpf_cnpj = document.getElementById('cpf_cnpj').value
    let celular = document.getElementById('celular').value
    let cep = document.getElementById('cep').value
    let numero = document.getElementById('numero').value
    let fixo = document.getElementById('fixo').value
    let rua = document.getElementById('rua').value
    let complemento = document.getElementById('complemento').value
    let bairro = document.getElementById('bairro').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value

    let Dados_Pessoais = {

        "Nome:":nome,
        "CPF:":cpf_cnpj,
        "Celular:":celular,
        "Numero Fixo:":fixo,
        "Cep:":cep,
        "Numero:":numero,
        "rua:":rua,
        "Complemento:":complemento,
        "Bairro:":bairro,
        "Cidade:":cidade,
        "Estado:":estado,
        
    }

    objJson(Dados_Pessoais)
    document.getElementById('nome').value = ""
    document.getElementById('cpf_cnpj').value = ""
    document.getElementById('celular').value = ""
    document.getElementById('cep').value = ""
    document.getElementById('numero').value = ""
    document.getElementById('fixo').value = ""
    document.getElementById('rua').value = ""
    document.getElementById('complemento').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('estado').value = ""
    alert("Seus dados foram enviados com sucesso, aguarde retorno por E-mail..")
    return true
}

function objJson(Dados_Pessoais){

    var Dados = JSON.stringify(Dados_Pessoais)
    console.log(Dados)
    return this.Dados
}
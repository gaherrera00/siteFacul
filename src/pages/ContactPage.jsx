import React from 'react';
import '../styles/contato.css';

function ContactPage() {
  return (
    <div className="contato-pagina">
      <h3>
        Sera uma alegria te atender
        <br />
        Voce pode nos encontrar no instagrem,whatsapp ou preenchendo o formulario
        abaixo
      </h3>
      <form className="form-contato">
        <fieldset>
          <legend>Dados pessoais</legend>
          <label htmlFor="nome">Nome e sobrenome</label>
          <input required type="text" id="nome" />

          <label htmlFor="email">Email</label>
          <input required type="email" id="email" />

          <label htmlFor="telefone">Telefone</label>
          <input required type="number" id="telefone" />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            name="mensagem"
            id="mensagem"
            cols="45"
            rows="5"
            defaultValue="Digite sua mensagem"
          ></textarea>

          <label>Como prefere o seu contato?</label>
          <label htmlFor="contato-email" className="radio-label">Email</label>
          <input type="radio" name="contato" id="contato-email" />
          <label htmlFor="contato-whatsapp" className="radio-label">
            Whatsapp
          </label>
          <input type="radio" name="contato" id="contato-whatsapp" />
          <label htmlFor="contato-telefone" className="radio-label">
            Telefone
          </label>
          <input type="radio" name="contato" id="contato-telefone" />

          <label htmlFor="motivo">Qual o motivo do seu contato?</label>
          <select name="motivo" id="motivo">
            <option value="default">Selecione</option>
            <option value="duvida">Duvida</option>
            <option value="sugestao">Sugestao</option>
            <option value="elogio">Elogio</option>
            <option value="reclamacao">Reclamacao</option>
          </select>
        </fieldset>

        <label className="checkbox-label">
          <input type="checkbox" name="noticia" id="noticia" />
          Deseja receber novidades por email
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default ContactPage;

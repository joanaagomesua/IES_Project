import { data } from "autoprefixer";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  
  // Estados para cada campo
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  // Estados para mensagens de erro
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newErrors = {};

    // Validação simples: checar se o campo está vazio
    if (!name) newErrors.name = "Nome é obrigatório";
    if (!userName) newErrors.userName = "Nome de usuário é obrigatório";
    if (!birthDate) newErrors.birthDate = "Data de nascimento é obrigatória";
    if (!email) newErrors.email = "Email é obrigatório";
    if (!password) newErrors.password = "Senha é obrigatória";
    if (!confirmPassword)
      newErrors.confirmPassword = "Confirmar senha é obrigatório";
    if (!termsChecked)
      newErrors.termsChecked = "Você deve aceitar os termos e condições";

    setErrors(newErrors);

    // Se não houver erros, enviar o formulário
  if (Object.keys(newErrors).length === 0) {
    // Preparar os dados para enviar
    console.log("Formulario enviado")
    const formData = {
      username: userName,
      email: email,
      password: password,
      birthday: birthDate,
      name: name
    };

    try {
      // Enviar os dados como JSON para o endpoint
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Verificar se a resposta é bem-sucedida
      if (response.ok) {
        const data = await response.json();
        console.log('Cadastro bem-sucedido:', data);
        // Aqui você pode lidar com a resposta, como redirecionar o usuário
      } else {
        console.error('Erro no cadastro:', response);
        // Aqui você pode lidar com erros de resposta
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      // Aqui você pode lidar com erros de solicitação
    }
  }
  };
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      {/* logo */}
      <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-64 mr-2"
            src="/src/assets/images/logo_big.png"
            alt="logo"
          />
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* nome */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  O seu Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              {/* user_name */}
              <div>
                <label
                  htmlFor="user_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  O seu Nome de Utilizador
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="User name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  A sua Data de Nascimento
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Data"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  O seu email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirme password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    checked={termsChecked}
                    onChange={(e) => setTermsChecked(e.target.checked)}
                    required
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    Eu aceito os {" "}
                    <a
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Termos e Condições
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-black bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Criar uma conta
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Já tem uma conta?
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  {" "}
                  Faça login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

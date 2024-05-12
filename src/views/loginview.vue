<template>
  <div class="background-container">
    <div class="login-container">
      <div class="empresa-container">
        <img src="@/assets/r3.png" alt="empresa" class="empresa-img">
      </div>
      <div class="login-icon">
        <img src="@/assets/r4.png" alt="usuario" class="login-img">
        <h4>Iniciar sesión</h4>
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <input type="email" placeholder="Correo electrónico" class="form-input">
        </div>
        <div class="form-group password-container">
          <input type="password" placeholder="Contraseña" class="form-input" id="password-input">
          <span class="password-toggle" @click="togglePasswordVisibility">
            <svg v-if="showPassword" stroke="currentColor" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round"
                stroke-linecap="round"></path>
              <path
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
            <svg v-else stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round"
                stroke-linecap="round"></path>
              <path
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              <path d="M15.605 16.821L19.779 20.995M18.722 13.56a4.5 4.5 0 11-6.362-6.362 4.5 4.5 0 016.362 6.362z"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        </div>
        <router-link to="/forgot-password" class="forgot-password">¿Olvidaste tu contraseña?</router-link>
        <div class="bottom-container">
          <button type="submit" class="login-button">Iniciar sesión</button>
          <router-link to="/register" class="register-button">Registrarse</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginComponent',
  data() {
    return {
      showPassword: false
    };
  },
  methods: {
    togglePasswordVisibility() {
      const passwordInput = document.getElementById('password-input');
      if (passwordInput) {
        this.showPassword = !this.showPassword;
        passwordInput.type = this.showPassword ? 'text' : 'password';
      }
    },
    login() {
      // Implementa la lógica de inicio de sesión aquí
    }
  }
}
</script>

<style scoped>
/* Estilos para el ojo que muestra/oculta la contraseña */
.password-toggle {
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-30%);
  cursor: pointer;
  width: 24px;
  height: 24px;
}

.password-toggle svg {
  color: #9CA3AF;
  width: 1rem;
  height: 1rem;
}

.background-container {
  background: linear-gradient(to bottom, #1C3049, #1171D7);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.login-container {
  background-color: #fff;
  text-align: center;
  width: 90%;
  height: 79%;
  max-width: 500px;
  /* Ancho máximo del formulario */
  border-radius: 15px;
  /* Bordes redondeados */
  border-top-left-radius: 15px;
  /* Bordes redondeados en la parte superior izquierda */
  border-top-right-radius: 15px;
  /* Bordes redondeados en la parte superior derecha */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  /* Sombra */
  position: relative;
  /* Posición relativa para el contenedor */
}

.empresa-container {
  background-color: #3d4f6f;
  /* Color de fondo del contenedor de la empresa */
  margin-bottom: 20px;
  /* Espacio entre la imagen de la empresa y el resto del contenido */
  border-top-left-radius: 15px;
  /* Bordes redondeados en la parte superior izquierda */
  border-top-right-radius: 15px;
  /* Bordes redondeados en la parte superior derecha */
  padding: 30px;
  max-width: 500px;
  /* Ancho máximo del formulario */
}

.login-img {
  width: 80px;
  /* Tamaño del icono de la empresa y del usuario */
  height: 80px;
}

.empresa-img {
  width: 200px;
  /* Tamaño del icono de la empresa y del usuario */
  height: 80px;
}

.password-container {
  position: relative;
  /* Contenedor de contraseña */
}

.bottom-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  /* Espacio entre los botones y el formulario */
}

.login-button {
  width: calc(50% - 20px);
  /* Ancho de los botones */
  border-radius: 10px;
  /* Bordes redondeados */
  color: #fff;
  border: none;
  outline: none;
  transition: background-color 0.3s ease;
  /*buevo */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 10px;
  gap: 15px;
  background-color: #1D95F6;
  outline: 1px #1D95F6 solid;
  outline-offset: -3px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 400ms;
  /*posicion */
  position: relative;
  left: 17px;
  top: 30px;
  font-family: arial,sans-serif;
  font-size: large;
  font-weight:200;
}

a.register-button {
  width: calc(50% - 20px); /* Misma fórmula que el botón de inicio de sesión */
  /* Misma fórmula que el botón de inicio de sesión */
  appearance: none;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: flex;
  font-family: arial,sans-serif;
  font-size: large;
  font-weight:200;
  line-height: 20px;
  list-style: none;
  padding: 15px 10px;
  position: relative;
  left: -10px;
  top: 30px;
  justify-content: center;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}

a.register-button:button:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}

a.register-button:disabled {
  background-color: #FAFBFC;
  border-color: rgba(27, 31, 35, 0.15);
  color: #959DA5;
  cursor: default;
}

a.register-button:active {
  background-color: #EDEFF2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

a.register-button:focus {
  outline: 1px transparent;
}

a.register-button:before {
  display: none;
}

a.register-button:button:-webkit-details-marker {
  display: none;
}

.login-button:hover {
  background-color: #148ef1;
  /* Cambio de color al pasar el ratón */
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: calc(100% - 70px);
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  position: relative;
  background-color:
}

.form-input:focus+.password-toggle {
  opacity: 1;
}

.forgot-password {
  margin-top: 10px;
  /* Espacio encima del enlace "Olvidaste tu contraseña" */
  display: block;
  /* Convertir el enlace en un bloque para ocupar toda la anchura disponible */
  position: relative;
  right: -120px;
}
</style>
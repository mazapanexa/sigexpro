<template>
    <div class="RegisterView">
        <div class="Register-container">
            <!-- Código de registro -->
            <div class="register">
                <div class="register-title">
                    <h1>Registro</h1>
                </div>
                <div class="register-form">
                    <form @submit.prevent="submitForm">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Nombre completo">
                        </div>
                        <div class="form-group">
                            <label for="apellido">Usuario</label>
                            <input type="text" class="form-control" id="apellido" placeholder="Usuario">
                        </div>
                        <div class="form-group">
                            <label for="password">Contraseña</label>
                            <input type="password" name="password" placeholder="Contraseña">
                        </div>
                        <div class="form-group">
                            <label for="correo">Correo electrónico</label>
                            <input type="email" class="form-control" id="correo" placeholder="Correo electrónico">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="telefono" placeholder="Telefono">
                        </div>
                         
                        <button type="submit">Crear cuenta</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterView',
    methods: {
        submitForm() {
            // Lógica para enviar los datos del formulario al servidor o para validarlos
        }
    }
}
</script>

<style>
/* Estilos del componente */
</style>

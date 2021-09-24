export class Usuario {
  public nombreUsuario = '';
  public password = '';
  public passwordRepetir = '';

  public validarNombreUsuario(): string {
    if (this.nombreUsuario.trim() === '') {
      return 'Para cambiar la contraseña debe ingresar un nombre de usuario.';
    }
    if (this.nombreUsuario.length < 3 || this.nombreUsuario.length > 8) {
      return 'El nombre de usuario debe tener entre 3 y 8 caracteres.';
    }
    return '';
  }

  public validarPassword(): string {
    if (this.password.trim() === '') {
      return 'Para cambiar la contraseña debe ingresar una.';
    }
    for(let i = 0; i < this.password.length; i++) {
      if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
        return 'La contraseña debe ser numérica.';
      }
    }
    if (this.password.length < 4 || this.password.length > 4) {
      return 'La contraseña debe ser numérica de 4 dígitos.';
    }
    return '';
  }
  public validarPasswordRepetir(): string {
    if (this.passwordRepetir.trim() === '') {
      return 'Debe confirmar su contraseña nueva.';
    }
    for(let i = 0; i < this.password.length; i++) {
      if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
        return 'La contraseña debe ser numérica.';
      }
    }
    if (this.password.length < 4 || this.password.length > 4) {
      return 'La contraseña debe ser numérica de 4 dígitos.';
    }
    return '';
  }


  public validarUsuario(): string {
    return this.validarNombreUsuario()
      || this.validarPassword() || this.validarPasswordRepetir();;
  }
}


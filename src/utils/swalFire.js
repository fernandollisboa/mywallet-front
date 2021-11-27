import Swal from 'sweetalert2';

export function alertUser({ text, type }) {
  Swal.fire({
    title: type === 'success' ? 'Success!' : 'Error!',
    text,
    icon: type || 'error',
    confirmButtonText: 'Continue',
    confirmButtonColor: '#11540e',
  });
}

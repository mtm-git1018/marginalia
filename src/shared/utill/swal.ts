import Swal from "sweetalert2";

export const sweetSuccess = (title:string) => {
  Swal.fire({
    title: title,
    icon:'success',
  });  
}

export const sweetInfo = (text: string) => {
  Swal.fire({
    title:'잠깐!',
    text,
    icon: 'info',
  });
};


export const sweetAlert = (title:string) => {
  Swal.fire({
    title,
    icon:"warning"
  })
}



export const sweetError = (text:string) => {
  Swal.fire({
  icon: "error",
  title: '에러가 발생하였습니다.',
  text: text,
  footer:`<a href='/help'>관련 이슈를 찾으시나요?</a>`
  })
}

export const sweetConfirm = (title:string,confirmText:string) => {
  Swal.fire({
    title,
    text: '정말 해당 정보를 삭제하시겠습니까?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#a67c6f',
    cancelButtonColor: '#b85c50',
    confirmButtonText: confirmText,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: '성공적으로 삭제되었습니다!',
        icon:'success'
      })
    }
  })
}

export const sweetOkay = (title:string, onClose:()=>void) => {
  Swal.fire({
    title:title,
    icon:'success'
  }).then(() => {
    onClose()
  })
}
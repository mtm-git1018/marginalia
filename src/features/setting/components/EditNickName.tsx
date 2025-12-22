import type { Profile } from "..";

interface Props {
setForm:React.Dispatch<React.SetStateAction<Profile>>
}

function EditNickName({ setForm } : Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="nickname">닉네임</label>
      <input
        id="nickname"
        type="text"
        required
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            nickname: e.target.value,
          }))
        }
        placeholder="닉네임은 8글자까지 입력 가능합니다."
        className="border p-2 rounded-lg border-softTan bg-white"
      />
    </div>
  );
}
export default EditNickName
import type { Profile } from "..";

interface Props {
form: Profile,
setForm:React.Dispatch<React.SetStateAction<Profile>>
}

function EditNickName({form, setForm } : Props) {
  return (
    <div className="flex flex-col ">
      <label htmlFor="nickname" className="text-deepBrown text-l;g font-semibold">닉네임</label>
      <input
        id="nickname"
        type="text"
        required
        value={form.nickname}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            nickname: e.target.value,
          }))
        }
        onFocus={() =>
          setForm((prev) => ({
            ...prev,
            nickname:''
          }))
        }
        placeholder="닉네임은 8글자까지 입력 가능합니다."
        className="border p-2 rounded-lg border-softTan bg-white
        placeholder:text-softTan text-softTan focus:text-warmBrown"
      />
    </div>
  );
}
export default EditNickName
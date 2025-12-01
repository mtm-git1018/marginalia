import Button from "../../shared/components/Button";
import image1 from '@/shared/asset/welcomeimage1.webp'
function OnBoard() {
  return (
    <div className="flex flex-col justify-between  items-center ">
      <span className="flex flex-col gap-2 w-full">
        <h2 className="text-2xl text-titleText">책장을 넘길때마다.</h2>
        <h2 className="text-right text-2xl text-titleText">남기고 싶은 순간들</h2>
      </span>
      <p>당신의 독서여정을 소중히 기록하세요</p>
      <img src={image1} alt="책과 잔 이미지" />
     <Button message="다음" type='one' />
    </div>
  );
}
export default OnBoard
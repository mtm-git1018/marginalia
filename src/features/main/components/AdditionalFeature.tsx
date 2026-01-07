import { IoTimerOutline, IoCalendarOutline } from 'react-icons/io5';
import { useNavigate} from 'react-router';

function AdditionalFeatures() {

  const navigate = useNavigate()

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-titleText">추가 기능</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          className="group bg-lightSand rounded-lg p-6 text-left hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
          onClick={() => navigate(`timer`)}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-background rounded-full group-hover:bg-sageGreen/10 transition-colors">
              <IoTimerOutline className="text-2xl text-sageGreen" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-titleText mb-1">독서 타이머</h3>
              <p className="text-sm text-text/70">매일 매일 꾸준히 독서해보세요</p>
            </div>
          </div>
        </button>

        <button
          className="group bg-lightSand rounded-lg p-6 text-left hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
          onClick={() => navigate('calendar')}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-background rounded-full group-hover:bg-sageGreen/10 transition-colors">
              <IoCalendarOutline className="text-2xl text-sageGreen" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-titleText mb-1">독서 캘린더</h3>
              <p className="text-sm text-text/70">한눈에 보는 나의 독서 여정</p>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}

export default AdditionalFeatures
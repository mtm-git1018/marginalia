import Button from "@/shared/components/button/Button"
import { Link } from "react-router"

function OnboardIntro() {
  return (
            <section className="hidden lg:flex lg:flex-col lg:justify-center lg:gap-8 lg:flex-1 lg:max-w-2xl">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold font-serif text-deepBrown leading-tight">
                  독서 기록의 새로운 시작
                </h1>
                <p className="text-lg text-warmBrown leading-relaxed">
                  Marginalia와 함께 당신의 독서 여정을 기록하세요
                </p>
              </div>
              <div className="max-w-sm">
                <Link to="/login">
                  <Button variant="primary">시작하기</Button>
                </Link>
              </div>
            </section>
  )
}
export default OnboardIntro
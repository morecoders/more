import RecommendPage from "@/components/res/recommendation";


export default async function Recommend(){
    return (
        <>
          <RecommendPage
            first_name="John"
            last_name="Doe"
            username="johndoe"
            age="30"
            job="Software Engineer"
            img="/path/to/profile.jpg"
          />
        </>
    )
}
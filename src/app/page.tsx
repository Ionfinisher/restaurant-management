import Image from "next/image";
import Link from "next/link";
import hero from "../../public/hero.png";
import user from "../../public/user-svgrepo-com.svg";
import fork from "../../public/fork-knife-svgrepo-com.svg";
import cart from "../../public/cart-shopping-svgrepo-com.svg";
import support from "../../public/support-svgrepo-com.svg";
import plate from "../../public/images/about-4.jpg";


export default function Home() {
  return (
    <main className="bg-white">
      {/* hero section */}
      <div className="w-full h-[732px] bg-[url('/images/bg-hero.jpg')] bg-blend-multiply bg-gray-700 bg-cover bg-center bg-no-repeat flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 py-20 px-20 items-center md:flex-row md:align-middle w-full">
            <div className="flex flex-col m-3 gap-8 md:basis-[50%]">
              <h1 className="text-5xl font-extrabold text-white">
                Enjoy Our
              </h1>
              <h1 className="text-5xl font-extrabold text-white">
                Delicious Meal
              </h1>
              <p className="text-lg text-white">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Link className="px-8 py-3 w-fit flex justify-center items-center font-medium text-white capitalize transition-colors duration-300 transform bg-[#FEA116] hover:bg-[#FEA116] focus:outline-none focus:ring focus:ring-[#FEA116] focus:ring-opacity-80" href="#">
                  <h1 className="text-xl">Book a table</h1>
              </Link>
            </div>
            <div className="flex flex-col m-3 md:basis-[50%]">
              <Image className="animate-refine-slide" src={hero} alt={"Plate"} width={500} height={500}></Image>
            </div>
          </div>
        </div>
      </div>

      {/* card section */}
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex gap-5 py-20 px-20 items-center justify-between">
            <div className="transition ease-in-out duration-300 shadow-xl bg-white text-black hover:bg-[#FEA116] hover:text-white p-5 flex flex-col gap-5 justify-center items-start w-[224px] h-fit">
              <Image className="color-[#FEA116] hover:color-white" src={user} alt={"user"} width={50} height={50}></Image>
              <h1 className="text-xl font-bold">Master Chefs</h1>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
              </p>
            </div>

            <div className="transition ease-in-out duration-300 shadow-xl bg-white text-black hover:bg-[#FEA116] hover:text-white p-5 flex flex-col gap-5 justify-center items-start w-[224px] h-fit">
              <Image className="color-[#FEA116] hover:color-white" src={fork} alt={"fork"} width={50} height={50}></Image>
              <h1 className="text-xl font-bold">Master Chefs</h1>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
              </p>
            </div>

            <div className="transition ease-in-out duration-300 shadow-xl bg-white text-black hover:bg-[#FEA116] hover:text-white p-5 flex flex-col gap-5 justify-center items-start w-[224px] h-fit">
              <Image className="color-[#FEA116] hover:color-white" src={cart} alt={"cart"} width={50} height={50}></Image>
              <h1 className="text-xl font-bold">Master Chefs</h1>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
              </p>
            </div>

            <div className="transition ease-in-out duration-300 shadow-xl bg-white text-black hover:bg-[#FEA116] hover:text-white p-5 flex flex-col gap-5 justify-center items-start w-[224px] h-fit">
              <Image className="fill-[#FEA116] hover:fill-white" src={support} alt={"support"} width={50} height={50}></Image>
              <h1 className="text-xl font-bold">Master Chefs</h1>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* Popular food section */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pb-20 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-20 md:px-20">
          <h2 className="text-4xl font-bold tracking-tight text-center text-gray-900">Customers also liked</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image src={plate} width={300} height={500} alt={"Front of men&#039;s Chicken Burger."} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Chicken Burger
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">Ipsum dolor</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$135</p>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image src={plate} width={300} height={500} alt={"Front of men&#039;s Chicken Burger."} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Chicken Burger
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">Ipsum dolor</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$135</p>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image src={plate} width={300} height={500} alt={"Front of men&#039;s Chicken Burger."} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Chicken Burger
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">Ipsum dolor</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$135</p>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image src={plate} width={300} height={500} alt={"Front of men&#039;s Chicken Burger."} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Chicken Burger
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-900">Ipsum dolor</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$135</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book a table section */}
      <div className="w-full mjy-20 bg-[#0F172B]">
        <div className="container mx-auto">
          <div className="h-[400px]"></div>
        </div>
      </div>



      {/* testimonials section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-20 pb-20 mx-auto">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div>
              <h1
                className="text-2xl font-bold text-gray-900 capitalize lg:text-4xl dark:text-white"
              >
                What our clients are saying
              </h1>

              <div className="flex mx-auto mt-6">
                <span
                  className="inline-block w-40 h-1 bg-[#FEA116] rounded-full"
                ></span>
                <span
                  className="inline-block w-3 h-1 mx-1 bg-[#FEA116] rounded-full"
                ></span>
                <span
                  className="inline-block w-1 h-1 bg-[#FEA116] rounded-full"
                ></span>
              </div>
            </div>
          </div>

          <section
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3"
          >
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-900 dark:text-gray-400">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Robert
                  </h1>
                  <span className="text-sm text-gray-900 dark:text-gray-400"
                    >CTO, Robert Consultency</span>
                </div>
              </div>
            </div>

            <div
              className="p-8 bg-[#FEA116] border border-transparent rounded-lg dark:bg-blue-600"
            >
              <p className="leading-loose text-white">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-white">Jeny Doe</h1>
                  <span className="text-sm text-gray-200"
                    >CEO, Jeny Consultency</span>
                </div>
              </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-900 dark:text-gray-400">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>

              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Ema Watson
                  </h1>
                  <span className="text-sm text-gray-900 dark:text-gray-400"
                    >Marketing Manager at Stech</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>


    </main>
  );
}

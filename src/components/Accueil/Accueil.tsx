import {Button} from "@Components/ui/button.tsx";

const Accueil = () => {
  return (
    <>
      <div className="">

        <div className="mx-auto w-11/12  rounded-md bg-primary p-4">
          <h2 className="text-4xl text-center my-6 text-white font-semibold">Trouver une entreprise /ou/ le metier qui vous convient.</h2>

          <div className="flex flex-col gap-y-1">
            <input className="border border-border w-full px-1 py-2 rounded-md bg-primary-foreground dark:bg-foreground text-black" type="search" name="search" id="search" placeholder={"Ex.: Développeur, Adminisrateur réseau, ..."} />
            <Button autoCapitalize={"on"} variant={"outline"} className={"text-lg"}>Rechercher</Button>
          </div>

          {/*<p className="bg-white text-black">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam atque aut est facilis fugiat iste numquam odio, quae quam quos ratione suscipit, unde velit vero voluptas voluptates voluptatibus. Reiciendis.</span><span>Accusantium amet architecto, dignissimos error ex explicabo labore, maiores mollitia obcaecati pariatur praesentium quidem temporibus veniam. A ab aspernatur distinctio ducimus eligendi enim excepturi omnis quis ullam vero. Beatae, labore?</span><span>Alias amet asperiores beatae blanditiis consequatur dolorum, ducimus error est et exercitationem id impedit incidunt laboriosam laborum magnam nostrum obcaecati perspiciatis quia quod, recusandae reiciendis rem reprehenderit sapiente sint voluptatem!</span><span>Consequatur cum distinctio dolorum error ex officia perferendis provident reprehenderit sit voluptates! Accusamus asperiores ducimus error fugiat numquam omnis quae quo sed. Ad eum excepturi, molestias necessitatibus soluta veniam vitae!</span><span>A consequatur debitis dolor enim harum, laudantium sapiente. A alias at dolores hic incidunt officiis quis reprehenderit sapiente sunt voluptatibus! Adipisci cum ea enim odit possimus. Dolorem doloremque reiciendis sequi.
            </span>
          </p>*/}
        </div>

      </div>
    </>
  );
}
export default Accueil;
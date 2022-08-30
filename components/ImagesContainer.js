/* eslint-disable @next/next/no-img-element */
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap/dist/gsap";
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(Flip);

const initialIcons = [
  {
    route: "/",
    src: "/person.svg",
    name: "Person",
  },
  {
    route: "/potions",
    src: "/potions.svg",
    name: "Potions",
  },
  {
    route: "/spells",
    src: "/spell.svg",
    name: "Spells",
  },
];

const ImagesContainer = () => {
  const [icons, setIcons] = useState(initialIcons);
  const iconsRefs = useRef(null);
  const flipState = useRef(null);
  const initialRender = useRef(true);
  const { pathname } = useRouter();

  const iconClickHandler = (e) => {
    
  };

  useLayoutEffect(() => {
    if (!iconsRefs.current) {
      iconsRefs.current = gsap.utils.toArray(".flip-icon");
    }
  }, []);

  useEffect(() => {
    if (flipState.current) {
      Flip.from(flipState.current, {duration: 0.5});
    }
  }, [icons]);

  useEffect(() => {
    if (!initialRender.current) {
      flipState.current = Flip.getState(iconsRefs.current);
      let targetIcon;
      const updatedIcons = icons.filter((icon) => {
        if (icon.route === pathname) {
          targetIcon = icon;
          return false;
        }
        return true;
      });
      updatedIcons.unshift(targetIcon);
      setIcons(updatedIcons);
    }
    initialRender.current = false;
  }, [pathname]);

  return (
    <div className="w-full bg-indigo-200 mx-auto">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-4 justify-center h-24">
          {
            icons.map((icon) => 
              <img
                className="flip-icon"
                src={icon.src}
                alt={icon.name}
                key={icon.name}
                onClick={iconClickHandler}
              />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default memo(ImagesContainer);

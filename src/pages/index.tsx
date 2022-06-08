import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    'https://api.github.com/repos/builtbybrandon/portfolio/commits'
  );
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  };
}

export default function HomePage({ data }) {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className='relative flex h-full min-h-screen w-full grow flex-col bg-[#010C15] p-6'>
        <div className='absolute inset-x-0 left-0 top-0 mx-auto flex aspect-video w-screen translate-y-[50%] rotate-45 scale-75 rounded-full bg-gradient-to-br from-[#43d9ad] to-[#4d5bce] blur-[150px] sm:hidden'></div>
        <main className='relative flex h-full w-full grow flex-col overflow-hidden rounded-lg border border-[#1E2D3D] bg-[#011627] '>
          <nav className='z-20 flex w-full flex-col sm:hidden'>
            <div className='z-[21] flex justify-between border-b border-[#1E2D3D] p-4'>
              <p className='text-[#607B96]'>brandon-guzman</p>
              <button className='btn h-6 w-6 text-[24px] text-[#607B96]'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z'
                    fill='#607B96'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='bg t-a absolute inset-x-0 z-[19] hidden h-full w-full overflow-hidden opacity-0 blur-sm'>
              <div className='invisible flex justify-between border-b border-[#1E2D3D] p-4'>
                <p className='text-[#607B96]'>null</p>
              </div>
              <button className='flex w-full items-center border-b border-[#1E2D3D] p-4'>
                <p className='text-[#607B96]'>_hello</p>
              </button>
              <button className='flex w-full items-center border-b border-[#1E2D3D] p-4'>
                <p className='text-[#607B96]'>_about-me</p>
              </button>
              <button className='flex w-full items-center border-b border-[#1E2D3D] p-4'>
                <p className='text-[#607B96]'>_projects</p>
              </button>
            </div>
          </nav>
          <nav className='hidden w-full items-center justify-between border-b border-[#1E2D3D] px-4 sm:flex'>
            <div className='flex w-full items-center'>
              <div className='flex h-full w-full min-w-[12rem] flex-[0.2] items-center border-r border-[#1E2D3D] py-2'>
                <p className='text-[#607B96]'>brandon-guzman</p>
              </div>
              <button className='h-full w-max border-r border-b-2 border-[#1E2D3D] border-b-[#FEA55F] px-4 py-2'>
                <p className='text-[#607B96]'>_hello</p>
              </button>
              <button className='h-full w-max border-r border-[#1E2D3D] px-4 py-2 '>
                <p className='text-[#607B96] hover:text-gray-300'>_about-me</p>
              </button>
              <button className='h-full w-max border-r border-[#1E2D3D] px-4 py-2 '>
                <p className='text-[#607B96] hover:text-gray-300'>_projects</p>
              </button>
            </div>
          </nav>
          <div className='relative flex h-full w-full flex-1 grow flex-col sm:flex-row sm:justify-center sm:gap-10 '>
            <div className='absolute inset-x-0 left-0 top-0 mx-auto flex aspect-video w-screen translate-x-[-25%] translate-y-[50%] rotate-45 rounded-full bg-gradient-to-r from-[#43d9ad] to-[#4d5bce] opacity-50 blur-[50px] sm:translate-y-[-20%] sm:blur-[200px] xl:hidden xl:translate-x-[25%] xl:scale-[0.25]'></div>
            <div className='flex h-24 w-full sm:hidden'></div>
            <div className='flex h-full grow flex-col sm:h-max sm:grow-0 sm:self-center'>
              <div className='z-10 flex w-full flex-col gap-2 self-center px-6'>
                <p className='text-[#fff]'>Hi, I am</p>
                <p className='w-full text-5xl text-[#fff]'>
                  Brandon Guzman-Morales
                </p>
                <div className='group relative flex cursor-default select-none'>
                  <p className='flex text-lg text-[#4D5BCE] group-hover:hidden'>
                    &#10095; Full-stack developer{' '}
                  </p>
                  <p className='hidden text-lg text-[#4D5BCE] group-hover:flex'>
                    &#10095; Full-stack developer + Business Developer{' '}
                  </p>
                </div>
              </div>
              <div className='h-full w-full grow sm:h-16'></div>
              <div className='z-10 flex w-full flex-col gap-2 self-center px-6'>
                <p className='text-[#607B96]-l text-[#607B96]'>
                  &#47;&#47; lastUpdate: {data[0].commit.committer.date}
                </p>
                <p className='text-[#607B96]'>&#47;&#47; building</p>
                <p className='text-lg text-[#607B96]'>
                  <span className='text-[#4D5BCE]'>const</span>
                  <span className='text-green-400'> latestProject</span> =
                  <a
                    href='https://google.com'
                    className='text-red-400 hover:underline'
                  >
                    &quot;https://google.com&quot;&#59;
                  </a>
                </p>
              </div>
            </div>
            <div className='relative hidden w-[20%] flex-col justify-center xl:flex'>
              <div className='z-20 flex aspect-square w-full overflow-clip rounded-xl border border-[#1E2D3D] bg-[#011627]/40'>
                {/* TODO: add small browser game here */}
              </div>
              <div className='absolute inset-x-0 mx-auto h-12 w-24 rotate-45 scale-[3] rounded-full bg-gradient-to-r from-[#43d9ad] to-[#4d5bce] blur-xl'></div>
            </div>
            <div className='flex h-24 w-full sm:hidden'></div>
          </div>
          <footer className='inset-x-0 bottom-0 z-20 flex w-full items-center justify-between overflow-hidden border-t border-[#1E2D3D] sm:hidden'>
            <p className='p-4 text-[#607B96] '>find me on: </p>
            <div className='flex items-center'>
              <button className='btn-b flex items-center justify-center border-l border-[#1E2D3D] p-4 opacity-60 hover:opacity-100'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M22.3832 5.65605C21.6197 5.99374 20.8101 6.21552 19.9812 6.31405C20.8549 5.79148 21.5089 4.96906 21.8212 4.00005C21.0012 4.48805 20.1022 4.83005 19.1652 5.01505C18.5358 4.34163 17.7015 3.89501 16.7921 3.74463C15.8827 3.59425 14.9491 3.74854 14.1364 4.1835C13.3238 4.61846 12.6776 5.30973 12.2983 6.14984C11.919 6.98995 11.8279 7.93183 12.0392 8.82905C10.3763 8.7457 8.74952 8.31357 7.26447 7.56071C5.77943 6.80785 4.46931 5.7511 3.41918 4.45905C3.04747 5.0975 2.85214 5.82328 2.85318 6.56205C2.85318 8.01205 3.59118 9.29305 4.71318 10.043C4.04919 10.0221 3.39982 9.84283 2.81918 9.52005V9.57205C2.81938 10.5377 3.15355 11.4737 3.76503 12.2211C4.37651 12.9686 5.22766 13.4815 6.17418 13.673C5.5578 13.8401 4.91149 13.8647 4.28418 13.745C4.55105 14.5763 5.07119 15.3032 5.77178 15.8242C6.47236 16.3451 7.31831 16.6338 8.19118 16.65C7.32366 17.3314 6.33036 17.835 5.26806 18.1322C4.20577 18.4294 3.09531 18.5143 2.00018 18.382C3.91188 19.6115 6.13728 20.2642 8.41018 20.262C16.1032 20.262 20.3102 13.889 20.3102 8.36205C20.3102 8.18205 20.3052 8.00005 20.2972 7.82205C21.116 7.23022 21.8228 6.49707 22.3842 5.65705L22.3832 5.65605Z'
                    fill='#607B96'
                  ></path>
                </svg>
              </button>
              <button className='btn-b flex items-center justify-center border-l border-[#1E2D3D] p-4 opacity-60 hover:opacity-100'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002V5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002V8.48002Z'
                    fill='#607B96'
                  ></path>
                </svg>
              </button>
              <button className='btn-b flex items-center justify-center border-l border-[#1E2D3D] p-4 opacity-60 hover:opacity-100'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65882 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8392C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z'
                    fill='#607B96'
                  ></path>
                </svg>
              </button>
            </div>
          </footer>
          <footer className='inset-x-0 bottom-0 z-20 hidden w-full items-center justify-between overflow-hidden border-t border-[#1E2D3D] sm:flex'>
            <div className='flex items-center gap-4'>
              <p className='py-2 pl-4 text-[#607B96] '>find me on: </p>
              <div className='flex items-center'>
                <button className='btn-b flex items-center justify-center border-l border-[#1E2D3D] p-2 opacity-60 hover:opacity-100'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M22.3832 5.65605C21.6197 5.99374 20.8101 6.21552 19.9812 6.31405C20.8549 5.79148 21.5089 4.96906 21.8212 4.00005C21.0012 4.48805 20.1022 4.83005 19.1652 5.01505C18.5358 4.34163 17.7015 3.89501 16.7921 3.74463C15.8827 3.59425 14.9491 3.74854 14.1364 4.1835C13.3238 4.61846 12.6776 5.30973 12.2983 6.14984C11.919 6.98995 11.8279 7.93183 12.0392 8.82905C10.3763 8.7457 8.74952 8.31357 7.26447 7.56071C5.77943 6.80785 4.46931 5.7511 3.41918 4.45905C3.04747 5.0975 2.85214 5.82328 2.85318 6.56205C2.85318 8.01205 3.59118 9.29305 4.71318 10.043C4.04919 10.0221 3.39982 9.84283 2.81918 9.52005V9.57205C2.81938 10.5377 3.15355 11.4737 3.76503 12.2211C4.37651 12.9686 5.22766 13.4815 6.17418 13.673C5.5578 13.8401 4.91149 13.8647 4.28418 13.745C4.55105 14.5763 5.07119 15.3032 5.77178 15.8242C6.47236 16.3451 7.31831 16.6338 8.19118 16.65C7.32366 17.3314 6.33036 17.835 5.26806 18.1322C4.20577 18.4294 3.09531 18.5143 2.00018 18.382C3.91188 19.6115 6.13728 20.2642 8.41018 20.262C16.1032 20.262 20.3102 13.889 20.3102 8.36205C20.3102 8.18205 20.3052 8.00005 20.2972 7.82205C21.116 7.23022 21.8228 6.49707 22.3842 5.65705L22.3832 5.65605Z'
                      fill='#607B96'
                    ></path>
                  </svg>
                </button>
                <button className='btn-b flex items-center justify-center border-x border-[#1E2D3D] p-2 opacity-60 hover:opacity-100'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002V5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002V8.48002Z'
                      fill='#607B96'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className='flex items-center border-l border-[#1E2D3D] pr-4'>
              <p className='px-4 py-2 text-[#607B96]'>@BuiltByBrandon </p>
              <button className='btn-b flex items-center justify-center p-2 opacity-60 hover:opacity-100'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65882 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8392C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z'
                    fill='#607B96'
                  ></path>
                </svg>
              </button>
            </div>
          </footer>
        </main>
      </div>
    </Layout>
  );
}

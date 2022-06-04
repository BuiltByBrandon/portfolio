import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <div className='flex min-h-screen items-center justify-center bg-[#010c15]'>
          <div className='m-16 min-h-screen rounded-lg border border-[#1E2D3D] bg-[#011627] lg:min-w-[1782px]'>
            <div className='lg:min-h-40 flex items-center border-b-[1px] border-[#1E2D3D] lg:max-h-40'>
              <h6 className='min-h-full border-r-[1px] border-[#1E2D3D] px-[22px] pr-[154px] font-normal text-[#607B96] lg:px-[32px] lg:pt-[18px] lg:pb-[18px]'>
                Brandon Guzman-Morales
              </h6>
              <h6 className='border-r-[1px] border-[#1E2D3D] font-normal text-[#607B96] lg:px-[32px] lg:pt-[18px] lg:pb-[18px]'>
                _hello
              </h6>
              <h6 className='border-r-[1px] border-[#1E2D3D] font-normal text-[#607B96] lg:px-[32px] lg:pt-[18px] lg:pb-[18px]'>
                _about-me
              </h6>
              <h6 className='border-r-[1px] border-[#1E2D3D] font-normal text-[#607B96] lg:px-[32px] lg:pt-[18px] lg:pb-[18px]'>
                _projects
              </h6>
              {/*TODO: align _contact me button to the right*/}
              <h6 className='border-r-[1px] border-[#1E2D3D] font-normal text-[#607B96] lg:px-[32px] lg:pt-[18px] lg:pb-[18px]'>
                _contact-me
              </h6>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

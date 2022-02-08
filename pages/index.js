import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Modal from '../components/modal'

const pages = [
  {
    'name': 'My Papers',
    'link': 'papers',
  },
  {
    'name': 'About Me',
    'link': 'about',
  },
  {
    'name': 'My Pervious Works',
    'link': 'pervious',
  },
  {
    'name': "My Current Work",
    'link': 'current',
  },
]

export default function Home() {








  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Nicholas J. Dimonaco</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.min.css" />
        <script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js"></script>
      </Head>


      <div className="flex flex-col justify-center mx-5 my-6 ">
        <div className="flex justify-center">
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight lg:text-6xl">
            Nicholas J. Dimonaco
          </p>
          </div>
          <div className='flex justify-center'>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Learn about me and my work.
          </p>
        </div>
      </div>

        <ul className='grid  md:grid-cols-2 grid-cols-1'>
        {pages.map((page) => (
          <div className=''>

            <li key={page.link} className="my-5 mx-6 bg-white rounded-lg shadow divide-y divide-gray-200 ">
              <div className="w-full items-center justify-between p-6 space-x-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-gray-900 text-sm font-medium truncate">{page.name}</h3>

                  </div>
                </div>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <Link
                      href={page.link}>
                      <a target={'(_blank)'}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                      >
                        {/* <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" /> */}
                        <svg className="w-5 h-5 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

          </div>
          
        ))}
        </ul>


    </div>
  )
}

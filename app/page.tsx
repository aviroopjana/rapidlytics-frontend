"use client";

export default function Home() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Ultra subtle background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-violet-400/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-violet-500/4 rounded-full blur-3xl"></div>
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full animate-pulse"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                Rapidlytics
              </span>
            </div>
            <div className="hidden sm:flex items-center space-x-6 md:space-x-8">
              <a href="#demo" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base">Demo</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base">Docs</a>
              <a href="https://github.com/aviroopjana/rapidlytics" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base">GitHub</a>
            </div>
            <div className="sm:hidden">
              <button className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-32 relative">
        {/* Hero-specific subtle animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-violet-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-violet-400/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight mb-4 sm:mb-6 animate-slide-up leading-tight relative">
              {/* Subtle background glow behind text */}
              <div className="absolute inset-0 bg-violet-500/15 blur-2xl rounded-full scale-125 opacity-60"></div>
              <span className="text-white relative z-10">The Analytics API</span>
              <br />
              <span className="text-white relative z-10">You'll Actually</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent animate-gradient relative z-10">
                Want to Use
              </span>
              <span className="text-white relative z-10">.</span>
            </h1>
          </div>
          <div className="animate-fade-in-up delay-300">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Track events. View insights. Own your backend. No SDKs. No BS.
            </p>
          </div>
          <div className="animate-fade-in-up delay-500">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <button 
                onClick={scrollToDemo}
                className="group bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Try the API
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <a 
                href="#"
                className="group bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 justify-center"
              >
                <span>View Dashboard</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use It Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative">
        <div className="animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-12 sm:mb-20 text-white">
            Why Rapidlytics
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="group p-6 sm:p-8 rounded-3xl border border-gray-800/30 hover:border-violet-500/20 transition-all duration-500 hover:bg-gray-900/20 animate-fade-in-up delay-100 backdrop-blur-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-500/10 flex items-center justify-center mt-1 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-violet-100 transition-colors duration-300">No SDKs Required</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Send events via simple HTTP requests — no setup hell.</p>
              </div>
            </div>
          </div>
          
          <div className="group p-6 sm:p-8 rounded-3xl border border-gray-800/30 hover:border-violet-500/20 transition-all duration-500 hover:bg-gray-900/20 animate-fade-in-up delay-200 backdrop-blur-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-500/10 flex items-center justify-center mt-1 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-violet-100 transition-colors duration-300">Own Your Data</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Self-host or use our Supabase-powered backend.</p>
              </div>
            </div>
          </div>
          
          <div className="group p-6 sm:p-8 rounded-3xl border border-gray-800/30 hover:border-violet-500/20 transition-all duration-500 hover:bg-gray-900/20 animate-fade-in-up delay-300 backdrop-blur-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-500/10 flex items-center justify-center mt-1 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-violet-100 transition-colors duration-300">Built for Devs</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">API-first design with flexible schema, open-source stack.</p>
              </div>
            </div>
          </div>
          
          <div className="group p-6 sm:p-8 rounded-3xl border border-gray-800/30 hover:border-violet-500/20 transition-all duration-500 hover:bg-gray-900/20 animate-fade-in-up delay-400 backdrop-blur-sm">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-500/10 flex items-center justify-center mt-1 flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-violet-100 transition-colors duration-300">Dashboards Included</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Visualize your events instantly. No extra tools needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Built for speed. Works in 3 steps.
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-medium px-4 sm:px-0">
            No SDKs. No config hell. Just your events, your backend.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Step 01 */}
          <div className="group relative bg-gray-900/20 border border-gray-800/30 hover:border-[#6366f1]/30 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:bg-gray-900/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[#6366f1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative z-10">
              <div className="text-xl sm:text-2xl font-mono font-bold text-gray-600 mb-2 sm:mb-3">01</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">SEND EVENTS</h3>
              <p className="text-sm text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                POST JSON to our endpoint.<br/>
                One line. Zero dependencies.
              </p>
              <div className="bg-gray-900/60 border border-gray-800/50 rounded-md p-3 sm:p-4 font-mono text-xs overflow-x-auto">
                <div className="text-gray-500 mb-1"># Terminal</div>
                <div className="text-white">
                  <span className="text-[#6366f1]">curl</span> -X POST api.rapidlytics.dev/track \<br/>
                  <span className="ml-2 text-gray-400">-H</span> <span className="text-green-400">"Content-Type: application/json"</span> \<br/>
                  <span className="ml-2 text-gray-400">-d</span> <span className="text-green-400">'{`'{"event":"signup","user":"john"}'`}'</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="group relative bg-gray-900/20 border border-gray-800/30 hover:border-[#6366f1]/30 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:bg-gray-900/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[#6366f1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative z-10">
              <div className="text-xl sm:text-2xl font-mono font-bold text-gray-600 mb-2 sm:mb-3">02</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">VIEW DATA</h3>
              <p className="text-sm text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                Query aggregated stats.<br/>
                Real-time. No caching delays.
              </p>
              <div className="bg-gray-900/60 border border-gray-800/50 rounded-md p-3 sm:p-4 font-mono text-xs overflow-x-auto">
                <div className="text-gray-500 mb-1"># Response</div>
                <div className="text-white">
                  <span className="text-yellow-400">{`{`}</span><br/>
                  <span className="ml-2 text-[#6366f1]">"total"</span>: <span className="text-orange-400">1,247</span>,<br/>
                  <span className="ml-2 text-[#6366f1]">"today"</span>: <span className="text-orange-400">89</span>,<br/>
                  <span className="ml-2 text-[#6366f1]">"growth"</span>: <span className="text-green-400">"+12%"</span><br/>
                  <span className="text-yellow-400">{`}`}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="group relative bg-gray-900/20 border border-gray-800/30 hover:border-[#6366f1]/30 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:bg-gray-900/40 backdrop-blur-sm">
            <div className="absolute inset-0 bg-[#6366f1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="relative z-10">
              <div className="text-xl sm:text-2xl font-mono font-bold text-gray-600 mb-2 sm:mb-3">03</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">BUILD ANYTHING</h3>
              <p className="text-sm text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                Raw events or custom queries.<br/>
                Your data. Your rules.
              </p>
              <div className="bg-gray-900/60 border border-gray-800/50 rounded-md p-3 sm:p-4 font-mono text-xs overflow-x-auto">
                <div className="text-gray-500 mb-1"># JavaScript</div>
                <div className="text-white">
                  <span className="text-purple-400">const</span> <span className="text-blue-300">stats</span> = <span className="text-purple-400">await</span> <span className="text-yellow-300">fetch</span>(<br/>
                  <span className="ml-2 text-green-400">'/api/events?filter=signup'</span><br/>
                  ).<span className="text-yellow-300">then</span>(<span className="text-blue-300">r</span> {`=>`} <span className="text-blue-300">r</span>.<span className="text-yellow-300">json</span>());
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Demo Section */}
      <section id="demo" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Track. Analyze. Scale.</h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 px-4 sm:px-0">Start sending events in under 60 seconds. No accounts. No tracking.</p>
        </div>
        
        <div className="max-w-3xl mx-auto animate-fade-in-up delay-200">
          <div className="group bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-gray-800/30 border border-gray-800/50 hover:border-violet-500/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 backdrop-blur-sm">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-gray-800/80 to-gray-700/40 border-b border-gray-700/50">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 animate-pulse delay-150"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse delay-300"></div>
              <span className="ml-2 sm:ml-4 text-xs sm:text-sm text-gray-400 font-mono">track-event.js</span>
            </div>
            <pre className="p-4 sm:p-6 text-xs sm:text-sm overflow-x-auto">
              <code className="text-gray-300 leading-relaxed">
{`// Track any event in one line
fetch('https://api.rapidlytics.dev/events', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'your-api-key'
  },
  body: JSON.stringify({
    event: 'user_signup',
    properties: {
      plan: 'pro',
      source: 'landing_page'
    }
  })
});

// Get analytics data
const stats = await fetch(
  'https://api.rapidlytics.dev/stats?event=user_signup&days=7'
).then(res => res.json());

console.log(\`\${stats.total} signups this week\`);`}
              </code>
            </pre>
          </div>
        </div>
        
        <div className="text-center mt-8 sm:mt-12 animate-fade-in-up delay-400">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <a 
              href="#demo" 
              className="group bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-500 hover:to-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25 relative overflow-hidden flex items-center gap-2 justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Try It Now</span>
            </a>
            <a 
              href="#" 
              target="_blank"
              className="group bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 border border-gray-700/50 hover:border-violet-500/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105 hover:shadow-lg hover:shadow-gray-900/50"
            >
              <span className="group-hover:text-violet-100 transition-colors duration-300">See Docs</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 mt-16 sm:mt-20 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3 mb-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                  Rapidlytics
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-3">Built with FastAPI, Supabase, and Next.js.</p>
              <p className="text-sm sm:text-base text-gray-400">Open-source and dev-first from day one.</p>
            </div>
            <div className="flex gap-6 sm:gap-8">
              <a href="https://github.com/aviroopjana/rapidlytics" target="_blank" className="text-sm sm:text-base text-gray-400 hover:text-violet-400 transition-colors duration-300 hover:scale-105 transform">
                GitHub
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-violet-400 transition-colors duration-300 hover:scale-105 transform">
                Docs
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-violet-400 transition-colors duration-300 hover:scale-105 transform">
                API Reference
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

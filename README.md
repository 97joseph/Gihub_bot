# Gihub_bot
 Hack path
 
 #Basic npm install commmands
 ## npm init
  # To initialise the package.json 


 ## npm i moment
 ## npm i simple-git


 #Issues o
 #Refresh connection 
 #Dominant issue=={
	"resource": "/e:/WEBSITES/Gihub_bot/package.json",
	"owner": "_generated_diagnostic_collection_name_#0",
	"code": "768",
	"severity": 4,
	"message": "Problems loading reference 'http://json.schemastore.org/eslintrc': Unable to load schema from 'http://json.schemastore.org/eslintrc': connect ETIMEDOUT 168.62.224.13:80.",
	"startLineNumber": 1,
	"startColumn": 1,
	"endLineNumber": 1,
	"endColumn": 2


	#Issues 2
	<--- Last few GCs --->
6)[18076:000001CD17593FD0]   162149 ms: Mark-sweep 1969.5 (1972.6) -> 1969.3 (1972.9) MB, 2665.7 / 14.1 ms  (+ 63.5 ms in 9 steps since start of marking, biggest step 58.9 ms, walltime since start of marking 2753 ms) (average mu = 0.118, current mu = 0.009)[18076:000001CD17593FD0]   165409 ms: Mark-sweep 1969.8 (1972.9) -> 1969.6 (1973.4) MB, 3088.9 / 4.0 ms  (+ 105.7 ms in 9 steps since start of marking, biggest step 102.0 ms,
walltime since start of marking 3260 ms) (average mu = 0.067, current mu = 0.020

<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 00007FF6D4A1165D]
Security context: 0x008a8bb80921 <JSObject>
    1: go$writeFile [000002C51ABB0C51] [E:\WEBSITES\Gihub_bot\node_modules\graceful-fs\graceful-fs.js:~138] [pc=0000000F39E56948](this=0x02f2f83c2931 <JSGlobal Object>,0x03024631e719 <String[#11]: ./data.json>,0x02c51abb0871 <String[37]\: {"date":"2020-06-26T05:19:04+03:00"}\n>,0x02c51abb0799 <Object map = 00000095E1140441>,0x02c51abb0bb1 <JSFunction (sfi ...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory

Failed to open Node.js report file: report.20200704.052154.18076.0.001.json (errno: 24)
 1: 00007FF6D3E00C3F napi_wrap+126287
 2: 00007FF6D3D9DF76 v8::base::CPU::has_sse+34950
 3: 00007FF6D3D9EC46 v8::base::CPU::has_sse+38230
 4: 00007FF6D45C803E v8::Isolate::ReportExternalAllocationLimitReached+94
 5: 00007FF6D45AF791 v8::SharedArrayBuffer::Externalize+785
 6: 00007FF6D44767FC v8::internal::Heap::EphemeronKeyWriteBarrierFromCode+1468
 7: 00007FF6D4481B40 v8::internal::Heap::ProtectUnprotectedMemoryChunks+1312
 8: 00007FF6D447E634 v8::internal::Heap::PageFlagsAreConsistent+3188
 9: 00007FF6D4473D43 v8::internal::Heap::CollectGarbage+1283
10: 00007FF6D44724D4 v8::internal::Heap::AllocateExternalBackingStore+1396
11: 00007FF6D44945A4 v8::internal::Factory::NewFillerObject+196
12: 00007FF6D41EE891 v8::internal::interpreter::JumpTableTargetOffsets::iterator::operator=+1681
13: 00007FF6D4A1165D v8::internal::SetupIsolateDelegate::SetupHeap+517453
14: 0000000F39E56948
}



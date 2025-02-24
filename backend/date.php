<?php
function gettoday()
{

	require_once "jdf.php";
	date_default_timezone_set('Asia/Tehran');
	$timezone = 0;
	$year = date('Y', time() + $timezone);
	$month = date('n', time() + $timezone);
	$day = date('j', time() + $timezone);
	$temp = gregorian_to_jalali($year, $month, $day, '');
	$sham = $temp[0].'/'.str_pad($temp[1], 2, '0', STR_PAD_LEFT).'/'. str_pad($temp[2], 2, '0', STR_PAD_LEFT);
	return $sham;
}
function getDateDetail($stratDate)
{

	require_once "jdf.php";
	date_default_timezone_set('Asia/Tehran');
	$timezone = 0;
	if (!isset($stratDate)||$stratDate=='') {
		$year = date('Y', time() + $timezone);
		$month = date('n', time() + $timezone);
		$day = date('j', time() + $timezone);
		$temp = gregorian_to_jalali($year, $month, $day, '');
		$sham = array('year' => $temp[0], 'month' => str_pad($temp[1], 2, '0', STR_PAD_LEFT), 'day' => str_pad($temp[2], 2, '0', STR_PAD_LEFT));

		$miladi = array('year' => $year, 'month' => str_pad($month, 2, '0', STR_PAD_LEFT), 'day' => str_pad($day, 2, '0', STR_PAD_LEFT));
	} else {
		$temp = explode('/', $stratDate);
		$sham = array('year' => $temp[0], 'month' => str_pad($temp[1], 2, '0', STR_PAD_LEFT), 'day' => str_pad($temp[2], 2, '0', STR_PAD_LEFT));
		$temp2 = jalali_to_gregorian($temp[0], $temp[1], $temp[2], '');
		$miladi = array('year' => $temp2[0], 'month' => str_pad($temp2[1], 2, '0', STR_PAD_LEFT), 'day' => str_pad($temp2[2], 2, '0', STR_PAD_LEFT));

	}

	$titleMonth = array('01' => 'فروردین', '02' => 'اردیبهشت', '03' => 'خرداد', '04' => 'تیر',
		'05' => 'مرداد', '06' => 'شهریور', '07' => 'مهر', '08' => 'آبان', '09' => 'آذر', '10' => 'دی', '11' => 'بهمن', '12' => 'اسفند');

	return array('miladi' => $miladi, 'shamsi' => $sham, 'title' => $titleMonth[$sham['month']]);
}
function isLeapJalaliYear($jy)
{
	return jalaliCal($jy)['leap'] === 0;
}
function jalaliCal($jy)
{
	$breaks = [
		-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178
	];

	$breaksCount = count($breaks);

	$gy = $jy + 621;
	$leapJ = -14;
	$jp = $breaks[0];

	if ($jy < $jp || $jy >= $breaks[$breaksCount - 1]) {
		throw new Exception('Invalid Jalali year : ' . $jy);
	}

	$jump = 0;

	for ($i = 1; $i < $breaksCount; $i += 1) {
		$jm = $breaks[$i];
		$jump = $jm - $jp;

		if ($jy < $jm) {
			break;
		}

		$leapJ = $leapJ + div($jump, 33) * 8 + div(mod($jump, 33), 4);

		$jp = $jm;
	}

	$n = $jy - $jp;

	$leapJ = $leapJ + div($n, 33) * 8 + div(mod($n, 33) + 3, 4);

	if (mod($jump, 33) === 4 && $jump - $n === 4) {
		$leapJ += 1;
	}

	$leapG = div($gy, 4) - div((div($gy, 100) + 1) * 3, 4) - 150;

	$march = 20 + $leapJ - $leapG;

	if ($jump - $n < 6) {
		$n = $n - $jump + div($jump + 4, 33) * 33;
	}

	$leap = mod(mod($n + 1, 33) - 1, 4);

	if ($leap === -1) {
		$leap = 4;
	}

	return [
		'leap' => $leap,
		'gy' => $gy,
		'march' => $march
	];
}

/**
 * @param $a
 * @param $b
 */
function div($a, $b): int
{
	return intdiv($a, $b);
}

/**
 * @param $a
 * @param $b
 * @return mixed
 */
function mod($a, $b): int
{
	return $a - intdiv($a, $b) * $b;
}
function getNextmonthDate($date)
{
	$monthshamsi = $date['shamsi']['month'];
	$yearshamsi = $date['shamsi']['year'];
	$nextyear = $yearshamsi;
	$lastnextmonth = 31;
	$nextmonth = $monthshamsi + 1;
	if ($nextmonth > 12) {
		$nextmonth = 1;
		$nextyear++;
	}
	return getDateDetail($nextyear . '/' . $nextmonth . '/01');
}
function getPrevmonthDate($date)
{
	$monthshamsi = $date['shamsi']['month'];
	$yearshamsi = $date['shamsi']['year'];
	$nextyear = $yearshamsi;
	$lastnextmonth = 31;
	$nextmonth = $monthshamsi - 1;
	if ($nextmonth < 1) {
		$nextmonth = 12;
		$nextyear--;
	}
	return getDateDetail($nextyear . '/' . $nextmonth . '/01');
}
function getCurrentDate($date)
{
	$monthshamsi = $date['shamsi']['month'];
	$yearshamsi = $date['shamsi']['year'];
	return getDateDetail($yearshamsi . '/' . $monthshamsi . '/01');
}

function getRengeDate($date, $act)
{
	if ($act == 'next') {
		$date = getNextmonthDate($date);
	}
	if ($act == 'prev') {
		$date = getPrevmonthDate($date);

	} else {
		$date = getCurrentDate($date);
	}
	$monthshamsi = $date['shamsi']['month'];
	$yearshamsi = $date['shamsi']['year'];
	$nextyear = $yearshamsi;
	$lastnextmonth = 31;
	$nextmonth = $monthshamsi + 1;
	if ($nextmonth > 12) {
		$nextmonth = 1;
		$nextyear++;
	}
	if ($nextmonth >= 7) {
		$lastnextmonth = 30;
		if (!isLeapJalaliYear($nextyear) && $nextmonth == 12) {
			$lastnextmonth = 29;
		}
	}


	$endRange = str_pad($nextyear, 2, '0', STR_PAD_LEFT) . '/' . str_pad($nextmonth, 2, '0', STR_PAD_LEFT) . '/' . str_pad($lastnextmonth, 2, '0', STR_PAD_LEFT);
	$enddate = getDateDetail($endRange);
	return array('start' => $date, 'end' => $enddate);

}




?>